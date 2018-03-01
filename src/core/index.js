const Output = require('../output');

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function l(msg) {
  console.log(msg);
}

module.exports = class Core {
  constructor(models) {
    this.models = models;
  }

  run() {
    let simulation = this.models.simulation;
    let sortedRides = this.models.rides.sort((ride1, ride2) => ride2.steps - ride1.steps);
    
    for (var currentStep = 0; currentStep <= simulation.maxSteps; currentStep++) {
      for (var car of this.models.vehicles) {
        car.nextStep(currentStep);
        
        if (car.currentRide == undefined) {
          let possibleRides = sortedRides.filter((ride) => {
            return ride.latestFinish > car.calcCurrentRideEnd(currentStep, ride);
          });
          
          if (possibleRides.length > 0) {
            let ride = possibleRides[0];

            car.assignRide(currentStep, ride);
            let index = sortedRides.indexOf(ride);
            sortedRides.remove(index);
          }
        }
      }
    }
  }

  output(outputFileName) {
    //console.log(this.simulation.vehicles);
    new Output(this.models.vehicles, outputFileName);
  }
};
