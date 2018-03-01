const {
  FileIO
} = require('./FileIO');
const process = require('process');
const Parser = require('./parser');
const Core = require('./core');

module.exports = {
  async main() {
    try {
      let data = await new FileIO('data/a_example.in').read();
      // console.log(data);
      let models = Parser.parseData(data);
      // console.log(models);

      let core = new Core(models);
      core.run();

      await new FileIO('output/example.out').write(core.output());
    } catch(err) {
      console.error(`Can't read file: ${err}`);
      process.exit(1);
    }
  }
};
