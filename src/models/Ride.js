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


};
