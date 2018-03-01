module.exports = class Ride {
  constructor(id, startPositionX, startPositionY, endPositionX, endPositionY, earliestStart, latestFinish) {
    this.id = id;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.endPositionX = endPositionX;
    this.endPositionY = endPositionY;
    this.earliestStart = earliestStart;
    this.latestFinish = latestFinish;
  }

  get steps() {
    return Math.abs(this.endPositionX - this.startPositionX) + Math.abs(this.endPositionY - this.startPositionY);
  }

  // hashcodeScore(vehicle, currentSimulationStep, timeBonus) {
  //   let steps = this.steps;
  //   let distanceToRide = this.distanceToMe(vehicle.x, vehicle.y);
  //   let wait = (currentSimulationStep + distanceToRide) - this.earliestStart;
  //   let timeB = wait == 0 ? timeBonus : 0;

  //   return steps + timeB;
  // }

  scoring(vehicle, currentSimulationStep, timeBonus) {
    let steps = this.steps;
    let distanceToRide = this.distanceToMe(vehicle.x, vehicle.y);
    let wait = (currentSimulationStep + distanceToRide) - this.earliestStart;
    let timeB = wait == 0 ? timeBonus : 0;

    // arrive later than start
    if (wait > 0)
      wait = 0;

    return steps + timeB - distanceToRide - -wait;
  }

  distanceToMe(myX, myY) {
    return Math.abs(myX - this.startPositionX) + Math.abs(myY - this.startPositionY);
  }

};
