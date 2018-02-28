class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Slice {
  constructor(from, to, ingredients) {
    this.from = from instanceof Array ? new Point(from[0], from[1]) : from;
    this.to = to instanceof Array ? new Point(to[0], to[1]) : to;
    this.ingredients = ingredients || [];
  }

  toString() {
    return `${this.from.y} ${this.from.x} ${this.to.y} ${this.to.x}`;
  }
}

module.exports = { Point, Slice };
