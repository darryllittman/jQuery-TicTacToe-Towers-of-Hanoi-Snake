const Board = require('./board.js');
const Coordinate = require('./coord.js');

class View {
  constructor(element) {
    this.element = element;
    this.board = new Board(18);
    let size = this.board.grid.length;
    let numItems = Math.pow(size, 2);

    this.element.append($('<ul></ul>'));

    for (let i = 0; i < numItems; i++) {
      let $li = $('<li></li>');

      $li.data("pos", [Math.round(i / size), i % size]);
      $('ul').append($li);
    }

    $(window).on("keydown", event => {
      event.preventDefault();
      this.handleKeyEvent(event);
    });

    setInterval( this.step, 500);
  }

  handleKeyEvent(event) {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    if (event.keyCode === 37) {
      this.board.snake.turn("W");
    }
    if (event.keyCode === 38) {
      this.board.snake.turn("N");
    }
    if (event.keyCode === 39) {
      this.board.snake.turn("E");
    }
    if (event.keyCode === 40) {
      this.board.snake.turn("S");
    }
  }

  step() {
    $('.snake').removeClass('snake');
    this.board.snake.move();
    this.render();
    $(`li:eq(${Math.floor(Math.random() * 300)})`).addClass('snake');
  }

  render() {
    console.log(this.board.snake.segments[1]);
    let flattened = [];
    this.board.snake.segments.forEach( (el) => {
      flattened.push(el[0] * 18 + el[1]);
    });
    flattened.forEach( (el) => {
      $(`li:eq(${el})`).addClass('snake');
    });
  }
}

module.exports = View;
