const Simulation = require('../models/Simulation.js');
const Vehicle = require('../models/Vehicle.js');
const Ride = require('../models/Ride.js');

module.exports = class Parser {

  static parseData(rawInput) {
    let lines = rawInput.trim().split('\n');
    let sim = this.parseFirsLine(lines.shift());

    let rs = [];
    let vs = [];

    lines.forEach((val, id) => {
      let parts = val.split(' ');
      let ride = new Ride(id, +parts[0], +parts[1], +parts[2], +parts[3], +parts[4], +parts[5]);

      rs.push(ride);
    });

    for (var i = 0; i < sim.vehicleCount; i++) {
      let v = new Vehicle(i);
      vs.push(v);
    }

    return {
      simulation: sim,
      rides: rs,
      vehicles: vs
    };
  }

  static parseFirsLine(firstLine) {
    let parts = firstLine.split(' ');

    let simulation = new Simulation(+parts[0], +parts[1], +parts[2], +parts[3], +parts[4], +parts[5]);

    return simulation;
  }



};
