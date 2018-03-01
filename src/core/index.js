module.exports = class Core {
  constructor(simulation) {
    this.simulation = simulation;
  }

  run() {
    let sortedRides = this.simulation.rides.sort((ride1, ride2) => ride2.steps - ride1.steps);

    for (var currentStep = 0; currentStep <= this.simulation.maxSteps; currentStep++) {
      for (var car of this.simulation.vehicles) {
        
      }
    }
  }

  output() {
    return 'test';
  }
};
