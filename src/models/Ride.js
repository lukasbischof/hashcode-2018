module.exports = class Ride {

  /**
   *
   * @param id
   * @param startPositionX
   * @param startPositionY
   * @param endPositionX
   * @param endPositionY
   * @param earliestStart
   * @param latestFinish
   */
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

  get scoring(vehicle, currentSimulationStep, timeBonus) {
    let steps = this.steps();
    let timeB = timeBonus;
    let distanceToRide = this.distanceToMe(vehicle.x, vehicle.y);
    let wait = (currentSimulationStep + steps) >= this.earliestStart ? 0 : this.earliestStart - (currentSimulationStep + steps);

    return steps + ((wait > 0) ? 0 : timeB) - distanceToRide - wait;
  }

  distanceToMe(myX, myY) {
    return Math.abs(myX - this.startPositionX) + Math.abs(myY - this.startPositionY);
  }

};
