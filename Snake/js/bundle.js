/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const View = __webpack_require__(1);
	const Board = __webpack_require__(2);
	const Snake = __webpack_require__(3);
	const Coordinate = __webpack_require__(4);
	$(() => {
	  const view = new View($('.snek'));
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Board = __webpack_require__(2);
	const Coordinate = __webpack_require__(4);

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Snake = __webpack_require__(3);
	const Coordinate = __webpack_require__(4);

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const Coordinate = __webpack_require__(4);

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	const Coordinate = {

	  plus(coord1, coord2) {
	    return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
	  },

	  equals(letter) {
	    if (letter === "N") {
	      return [0,1];
	    }
	    if (letter === "S") {
	      return [0,-1];
	    }
	    if (letter === "E") {
	      return [1,0];
	    }
	    if (letter === "W") {
	      return [-1,0];
	    }
	  },

	  isOpposite(dir1, dir2) {
	    if (dir1 === "N" && dir2 === "S") {
	      return true;
	    }
	    if (dir1 === "S" && dir2 === "N") {
	      return true;
	    }
	    if (dir1 === "E" && dir2 === "W") {
	      return true;
	    }
	    if (dir1 === "W" && dir2 === "E") {
	      return true;
	    }

	    return false;
	  }
	};

	module.exports = Coordinate;


/***/ }
/******/ ]);