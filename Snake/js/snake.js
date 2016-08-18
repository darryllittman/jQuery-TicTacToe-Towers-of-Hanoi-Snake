const Coordinate = require('./coord.js');

class Snake {
  constructor() {
    this.direction = "N";
    this.segments = [[9, 9]];
  }

  move() {
    let dirVec = Coordinate.equals(this.direction);
    let newCoord = Coordinate.plus(this.segments[0], dirVec);
    this.segments.unshift(newCoord);
    this.segments.pop();
  }

  turn(direction) {
    if (!Coordinate.isOpposite(this.direction, direction)) {
      this.direction = direction;
    }
  }
}

module.exports = Snake;
