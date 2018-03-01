const {
  FileIO
} = require('./FileIO');
const process = require('process');
const Parser = require('./parser');
const Core = require('./core');

module.exports = {
  async main() {
    const files = [
      'a_example',
      // 'b_should_be_easy',
      // 'c_no_hurry',
      // 'd_metropolis',
      // 'e_high_bonus',
    ];

    for (let file of files) {
      try {
        let data = await new FileIO('data/' + file + '.in').read();
        // console.log(data);
        let models = Parser.parseData(data);
        // console.log(models);

        let core = new Core(models);
        core.run();

        core.output(file);
      } catch (err) {
        console.error(`Can't read file: ${err}`);
        console.error(err.stack);
        process.exit(1);
      }
    }
  }
};
