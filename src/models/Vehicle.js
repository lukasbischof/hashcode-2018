module.exports = class Vehicle {

  /**
  * [constructor description]
  * @method constructor
  * @param  {[integer]}    id [id]
  */
  constructor(id) {
    this.x = 0;
    this.y = 0;
    this.id = id;
    this.rides = [];
    this.currentRide = undefined;
  }

  assignRide(ride) {
    this.currentRide = ride;
    this.rides.push(ride);
  }

  nextStep(currentSimulationStep) {
    if (this.currentRide) {

    }
  }

  static calcCurrentRideEnd(currentSimulationStep, ride) {
    let distanceToRide = ride.distanceToMe(this.x, this.y);
    let waitOnStart = (currentSimulationStep + distanceToRide) >= ride.earliestStart ? 0 : ride.earliestStart - (currentSimulationStep + distanceToRide);

    return distanceToRide+waitOnStart+ride.steps;
  }

  toString() {
    let outputString = `${this.id}`;

    this.rides.forEach(ride => {
      outputString += ` ${ride}`;
    });

    return outputString;
  }
};
