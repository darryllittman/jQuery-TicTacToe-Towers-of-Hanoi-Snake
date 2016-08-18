const Snake = require('./snake.js');
const Coordinate = require('./coord.js');

class Board {
  constructor(size = 18) {
    this.snake = new Snake();
    this.grid = [];
    for (let i = 0; i < size; i++) {
      this.grid.push(new Array(size));
    }
  }


}

module.exports = Board;
