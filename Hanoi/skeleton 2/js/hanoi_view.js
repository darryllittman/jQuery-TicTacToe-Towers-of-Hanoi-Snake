class HanoiView {
  constructor(game, DOMelement) {
    this.game = game;
    this.DOMelement = DOMelement;
    this.clicked = [];
  }

  setupTowers () {
    for (let i = 0; i < 3; i++) {
      let $list = $("<ul></ul>");
      $list.data("id",i);
      this.DOMelement.append($list);
    }

    this.render();

  }

  render() {
    let s = -1;
    let m = -1;
    let l = -1;

    this.game.towers.forEach ((tower, i) => {
      if (tower.indexOf(1) > -1) {
        s = i;
      }
      if (tower.indexOf(2) > -1) {
        m = i;
      }
      if (tower.indexOf(3) > -1) {
        l = i;
      }
    });

    $('li').remove();

    let $small = $('<li></li>').addClass("small");
    let $medium = $('<li></li>').addClass("medium");
    let $large = $('<li></li>').addClass("large");

    $(`ul:eq(${l})`).append($large);
    $(`ul:eq(${m})`).append($medium);
    $(`ul:eq(${s})`).append($small);


  }

  bindEvents() {
    $('ul').on("click", event => {

      if (this.game.isWon()) {
        location.reload();
      }
      let $tar = $(event.currentTarget);

      this.clicked.push($tar.data("id"));

      if (this.clicked.length < 2) {
        $tar.addClass("clicked");
      }


      if (this.clicked.length > 1) {
        if (!this.game.move(...this.clicked)) {
          alert("Invalid move!");
        }
        this.clicked = [];
        $('.clicked').removeClass("clicked");
      }
      this.render();
      if (this.game.isWon()) {
        this.DOMelement.append($('<h1>Congratulations, you won!</h1>'));
      }
    });
  }

  // getMove() {
  //
  //   this.game.move.curry(2)(start)(end);
  // }

// }

// Function.prototype.curry = function(num) {
//   let args = [];
//   const fn = this;
//   function _curry(arg) {
//     if (args.push(arg) === num) {
//       return fn(...args)
//     } else {
//       return _curry;
//     }
//     return _curry;
//   }
}

module.exports = HanoiView;
