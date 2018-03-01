const { FileIO } = require('../FileIO');

module.exports = class Output {
  constructor(vehicles, outputFileName){
    let fileIO = new FileIO(`output/${outputFileName}.in`);


    let output = '';
    vehicles.forEach(vehicle => {
      output += `${vehicle.toString()}\n`;
    });
    fileIO.write(output);
  }
};
