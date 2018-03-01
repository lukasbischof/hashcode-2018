const { FileIO } = require('./FileIO');
const process = require('process');
const Parser = require('./parser');

module.exports = {
  async main() {
    try {
      let data = await new FileIO('data/a_example.in').read();
      console.log(data);
      let models = Parser.parseData(data);
      console.log(models);

      await new FileIO('output/example.out').write('test');
    } catch(err) {
      console.error(`Can't read file: ${err}`);
      process.exit(1);
    }
  }
};
