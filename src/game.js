class Game {
  constructor() {
    this.playerOne = new Player('playerOne', "ghost");
    this.playerTwo = new Player('playerTwo', "black-cat");
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = this.playerOne;
  };
  changeCurrentPlayer() {
    if(this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  };
  addToBoard(quadrantID) {
    var id = parseInt(quadrantID);
    this.board[id] = this.currentPlayer.token;
    console.log(this.board);
  };
  
};

