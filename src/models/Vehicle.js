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
    this.rides = [];}


  toString() {
    let outputString = `${this.id}`;

    this.rides.forEach(ride => {
      outputString += ` ${ride}`;
    });

    return outputString;
  }
};
