const HanoiGame = require('../../solution\ 2/game.js');
const HanoiView = require('./hanoi_view.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  // game.move(0,1);

  view.setupTowers();
  view.bindEvents();
});
