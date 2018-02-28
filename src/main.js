const { FileIO } = require('./FileIO');
const { FileParser } = require('./FileParser');
const { PizzaCore } = require('./PizzaCore');
const process = require('process');
const chalk = require('chalk');

function log(message, color) {
  console.log((color || chalk.yellow)(message));
}

module.exports = {
  async main() {
    try {
      log('reading...');

      let pizza = FileParser.parse(await new FileIO('data/example.in').read());

      log('Pizza data: ');
      log('\n+-------------------------------+', chalk.green);
      log(`| columns: ${pizza.colsCount}\t\t\t|`, chalk.green);
      log(`| columns: ${pizza.rowsCount}\t\t\t|`, chalk.green);
      log(`| maximum slice size: ${pizza.maxSlice}\t\t|`, chalk.green);
      log(`| minimum ingredient count: ${pizza.minIngredient}\t|`, chalk.green);
      log('+-------------------------------+\n', chalk.green);

      log('evaluating...');

      let core = new PizzaCore(pizza);
      core.run();

      log('done! writing...');

      await new FileIO('output/example.out').write(core.output());
    } catch(err) {
      console.error(chalk.red(`Error occurred: ${err}`));
      console.error(chalk.red(err.stack));
      process.exit(1);
    }
  }
};
