const Game = require('../../solution/game.js');
const View = require('./ttt-view.js');



$( () => {
  const game = new Game();
  const view = new View(game,'potato');
  const $thing = $('.ttt');
  view.setupBoard();
  view.bindEvents();
});
