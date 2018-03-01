const { Slice } = require('./Slice');
const util = require('util');

function printSlice(slice) {
  return `(Slice from (${slice.from}) to (${slice.to}))`;
}

function log(msg) {
  // console.log(msg);
}

class PizzaCore {
  constructor(pizza) {
    this.pizza = pizza;
    this.slices = [];
  }

  possibleSlicePairs(slice) {
    var possibleSlicePairs = new Array;
    var xStart = Math.min(slice.from.x, slice.to.x);
    for (var x = 0; x < slice.xCount - 1; x++) {
      let delimiter = xStart + x;
      let pair = {
        first: this.pizza.slice([xStart, slice.from.y], [delimiter, slice.to.y]),
        second: this.pizza.slice([delimiter + 1, slice.from.y], [slice.to.x, slice.to.y])
      };

      possibleSlicePairs.push(
        Object.assign(pair, {
          score: pair.first.sliceScore(this.pizza) + pair.second.sliceScore(this.pizza)
        })
      );
    }

    for (var y = 0; y < slice.yCount - 1; y++) {
      let delimiter = slice.from.y + y;
      var f = this.pizza.slice([slice.from.x, slice.from.y], [slice.to.x, delimiter]);
      var s = this.pizza.slice([slice.from.x, delimiter + 1], [slice.to.x, delimiter + 1]);
      let pair = {
        first: f,
        second: s
      };
      
      possibleSlicePairs.push(
        Object.assign(pair, {
          score: pair.first.sliceScore(this.pizza) + pair.second.sliceScore(this.pizza)
        })
      );
    }

    return possibleSlicePairs;
  }

  divide(slice, i) {
    log("DIVIDE " + i);

    var possibleSlicePairs = this.possibleSlicePairs(slice).sort((pair1, pair2) => {
      return pair2.score - pair1.score;
    });

    var ret = undefined;
    for (var slicePair of possibleSlicePairs) {
      if (slicePair.score == 0)
        continue;
      
      ret = [slicePair.first, slicePair.second].map((slice) => {
        if (slice.sliceScore == 0) {
          log('invalid slice, return null');
          return null;
        } else if (slice.sliceScore(this.pizza) == 1) {
          log("divide: ");
          log(slice);
          let newSlice = this.divide(slice, i+1);
          if (newSlice) {
            log("could divide..");
            return newSlice;
          } else {
            log("cannot divide");
          }
        }
  
        return slice;
      }).filter(el => !!el);

      if (ret.length != 2) {
        continue;
      }

      return ret;
    }

    return null;
  }

  run() {
    this.slices = this.divide(
      new Slice([0,0], [this.pizza.colsCount - 1, this.pizza.rowsCount - 1], this.pizza.rows),
      1
    );
  }

  output() {
    const flatten = list => list.reduce(
      (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );

    var flattenedList = flatten(this.slices, []);
    var outputString = `${flattenedList.length}\n`;
    flattenedList.forEach((element) => {
      outputString += element.toString() + '\n';
    });

    return outputString;
  }
}

module.exports.PizzaCore = PizzaCore;
