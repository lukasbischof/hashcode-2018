class Point {
  constructor(x, y) {
    if (x === undefined || y === undefined)
      throw new Error(`Must have value. (${x} ${y}) provided`);

    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class Slice {
  constructor(from, to, ingredients) {
    this.from = from instanceof Array ? new Point(from[0], from[1]) : from;
    this.to = to instanceof Array ? new Point(to[0], to[1]) : to;
    this.ingredients = ingredients || [];
  }

  get xCount() {
    return Math.abs(this.to.x - this.from.x + 1);
  }

  get yCount() {
    return Math.abs(this.to.y - this.from.y + 1);
  }

  get count() {
    return this.xCount * this.yCount;
  }

  sliceScore(pizza) {
    if (this.count < (pizza.minIngredient * 2)) {
      return 0;
    }

    var ingredientsArray = this.ingredientsArray();
    var tomatoes = ingredientsArray.filter(ingredient => ingredient == 'T').length;
    var mushrooms = ingredientsArray.length - tomatoes;

    if (Math.min(mushrooms, tomatoes) < pizza.minIngredient)
      return 0;
    else if (this.count > pizza.maxSlice)
      return 1;

    return 2;
  }

  ingredientsArray() {
    return [].concat.apply([], this.ingredients);
  }

  toString() {
    return `${this.from.y} ${this.from.x} ${this.to.y} ${this.to.x}`;
  }
}

module.exports = { Point, Slice };
