const Output = require('../output');
const Vehicle = require('../models/Vehicle');
const Ride = require('../models/Ride');

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
    let rides = this.models.rides;
    
    for (var currentStep = 0; currentStep <= simulation.maxSteps; currentStep++) {
      for (var car of this.models.vehicles) {
        car.nextStep(currentStep);
        
        if (car.currentRide == undefined) {
          let possibleRides = rides.filter((ride) => {
            return ride.latestFinish > car.calcCurrentRideEnd(currentStep, ride);
          });
          
          possibleRides = possibleRides.sort((ride1, ride2) => {
            return ride2.scoring(car, currentStep, simulation.onTimeBonus)
              - ride1.scoring(car, currentStep, simulation.onTimeBonus);
          });
          
          if (possibleRides.length > 0) {
            let ride = possibleRides[0];

            car.assignRide(currentStep, ride);
            let index = rides.indexOf(ride);
            rides.remove(index);
          }
        }
      }
    }
  }

  output(outputFileName) {
    new Promise((_1, _2) => {
      let pups = this.models.vehicles.reduce((i, vehicle) => parseInt(i) + parseInt(vehicle.rides.length));
      l(`outputting ${outputFileName}: ${this.models.simulation.ridesCount - pups} / ${this.models.simulation.ridesCount}`);
    });

    new Output(this.models.vehicles, outputFileName);
  }
};
