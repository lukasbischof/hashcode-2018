const { Slice } = require('./Slice');

class PizzaCore {
  constructor(pizza) {
    this.pizza = pizza;
    this.slices = [];
  }

  divide(slice) {
    
  }

  run() {
    this.slices = this.divide(
      new Slice([0,0], [this.pizza.colsCount - 1, this.pizza.rowsCount - 1], this.pizza.rows)
    );
  }

  output() {
    var outputString = `${this.slices.length}\n`;
    this.slices.forEach((element) => {
      outputString += element.toString();
    });

    return outputString;
  }
}

module.exports.PizzaCore = PizzaCore;
