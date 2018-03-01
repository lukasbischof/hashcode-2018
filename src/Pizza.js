const { Slice } = require('./Slice');

class Pizza {
  constructor() {
    this.rowsCount = 0;
    this.colsCount = 0;
    this.minIngredient = 0;
    this.maxSlice = 0;
    this.rows = [];
  }

  slice(from, to) {
    let slice = new Slice(from, to);

    var result = [];
    var yDiff = Math.abs(slice.to.y - slice.from.y);
    var yStart = Math.min(slice.from.y, slice.to.y);
    for (var y = 0; y <= yDiff; y++) {
      var xStart = Math.min(slice.from.x, slice.to.x);
      var xDiff = Math.abs(slice.from.x - slice.to.x);

      result.push(
        this.rows[y + yStart].slice(xStart, xStart + xDiff + 1)
      );
    }

    slice.ingredients = result;

    return slice;
  }
}

module.exports.Pizza = Pizza;
