const Output = require('../output');

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

module.exports = class Core {
  constructor(simulation) {
    this.simulation = simulation;
  }

  run() {
    let sortedRides = this.simulation.rides.sort((ride1, ride2) => ride2.steps - ride1.steps);

    for (var currentStep = 0; currentStep <= this.simulation.maxSteps; currentStep++) {
      for (var car of this.simulation.vehicles) {
        car.nextStep(currentStep);
        if (car.currentRide == undefined) {
          let possibleRides = sortedRides.fliter((ride) => {
            return ride.latestFinish > car.calcCurrentRideEnd(currentStep, ride);
          });
          
          if (possibleRides.length > 0) {
            let ride = possibleRides[0];

            car.assignRide(ride);
            let index = sortedRides.indexOf(ride);
            sortedRides.remove(index);
          }
        }
      }
    }
  }

  output(outputFileName) {
    new Output(this.simulation.vehicles, outputFileName);
  }
};
