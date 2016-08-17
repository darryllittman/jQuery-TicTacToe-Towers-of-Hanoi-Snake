var View = function (game, $el) {
  this.game = game;
};

View.prototype.bindEvents = function () {

  $('li').on("click", event => {

    event.preventDefault();

    const $tar = $(event.currentTarget);
    this.makeMove($tar);
    // alert($tar.data("pos"));
  });
};

View.prototype.makeMove = function ($square) {
  if (this.over) {
    location.reload();
  } else {
    try{
      let mark = this.game.currentPlayer;
      this.game.playMove($square.data("pos"));
      $square.text(mark);
      if (mark === 'x') {
        $square.css("color","red");
      } else {
        $square.css("color","blue");
      }

      if (this.game.isOver()) {
        this.over = true;
        if (this.game.winner()) {
          let $h1 = $(`<h1>${this.game.winner()} wins!!!</h1>`);
          $('.ttt').append($h1);
        } else {
          let $h1 = $("<h1>Cats game</h1>");
          $('.ttt').append($h1);
        }
        let $h1 = $(`<h1>Click anywhere to play again!</h1>`);
        $('.ttt').append($h1);
      }
    }
    //click anywhere to play again
    //setup new button handler and create new game
    //
    catch (e) {
      alert('Invalid Move!');
    }
  }
};

View.prototype.setupBoard = function () {

  const $ul = $('<ul></ul>');

  $('.ttt').append($ul);

  for (let i = 0; i < 9; i++) {
    let $li = $('<li></li>');
    let pos = [Math.floor(i / 3), (i % 3) ];
    $li.data("pos", pos);
    $ul.append($li);
    this.over = false;
  }

  const $li = $('li');
  $li.each((idx, el) => {
    let $el = $(el);

  });
};

// [floor(num/3), num % 3 ]

module.exports = View;
