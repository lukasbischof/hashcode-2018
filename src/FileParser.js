const { Pizza } = require('./Pizza');

class FileParser {
  static parse(data) {
    let pizza = new Pizza;

    data.split('\n').forEach((element, index) => {
      if (element.length == 0)
        return;

      if (index == 0) {
        var chunks = element.split(' ');
        pizza.rowsCount = chunks[0];
        pizza.colsCount = chunks[1];
        pizza.minIngredient = chunks[2];
        pizza.maxSlice = chunks[3];
      } else {
        pizza.rows.push(element.split(''));
      }
    });

    return pizza;
  }
}

module.exports.FileParser = FileParser;
