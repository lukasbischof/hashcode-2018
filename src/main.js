const {
  FileIO
} = require('./FileIO');
const process = require('process');
const Parser = require('./parser');
const Core = require('./core');

module.exports = {
  async main() {
    const files = [
      'data/a_example.in',
      'data/b_should_be_easy.in',
      'data/c_no_hurry.in',
      'data/d_metropolis.in',
      'data/e_high_bonus.in',
    ];

    for (let file of files) {
      try {
        let data = await new FileIO(file).read();
        // console.log(data);
        let models = Parser.parseData(data);
        console.log(models);

        let core = new Core(models);
        core.run();

        await new FileIO('output/example.out').write(core.output());
      } catch (err) {
        console.error(`Can't read file: ${err}`);
        process.exit(1);
      }
    }
  }
};
