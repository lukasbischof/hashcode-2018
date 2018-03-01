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
    this.currentRideFinish = 0;
  }

  assignRide(currentSimulationStep, ride) {
    this.currentRide = ride;
    this.rides.push(ride.id);
    this.currentRideFinish = this.calcCurrentRideEnd(currentSimulationStep, ride);
  }

  nextStep(currentSimulationStep) {
    if (this.currentRide && this.currentRideFinish == currentSimulationStep) {
      this.currentRide = undefined;
    }
  }

  calcCurrentRideEnd(currentSimulationStep, ride) {
    let distanceToRide = ride.distanceToMe(this.x, this.y);
    let waitOnStart = (currentSimulationStep + distanceToRide) >= ride.earliestStart ? 0 : ride.earliestStart - (currentSimulationStep + distanceToRide);

    return distanceToRide+waitOnStart+ride.steps;
  }

  toString() {
    let outputString = `${this.rides.length}`;

    this.rides.forEach(ride => {
      outputString += ` ${ride}`;
    });

    return outputString;
  }
};
