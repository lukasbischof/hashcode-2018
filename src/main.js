const { FileIO } = require('./FileIO');
const process = require('process');

module.exports = {
  async main() {
    try {
      let data = await new FileIO('data/example.in').read();
      console.log(data);

      await new FileIO('output/example.out').write('test');
    } catch(err) {
      console.error(`Can't read file: ${err}`);
      process.exit(1);
    }
  }
};
