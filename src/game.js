class Game {
  constructor() {
    this.player1 = new Player('player1', "assets/ghost.svg");
    this.player2 = new Player('player2', "assets/black-cat.svg");
    this.board = [];
    this.currentPlayer = this.player1;
  };
  changeCurrentPlayer() {
    console.log(this.currentPlayer);
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    }
  };

};

