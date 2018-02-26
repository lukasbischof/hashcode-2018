const { FileIO } = require('./FileIO');
const process = require('process');

module.exports = {
  async main() {
    let file = new FileIO('data/example.in');
    try {
      let data = await file.read();
      console.log(data);
    } catch(err) {
      console.error(`Can't read file: ${err}`);
      process.exit(1);
    }
  }
};
