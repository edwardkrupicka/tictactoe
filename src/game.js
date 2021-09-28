class Game {
  constructor() {
    this.playerOne = new Player('playerOne', 'Casper');
    this.playerTwo = new Player('playerTwo', 'Salem');
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.savedPlayers = [];
    this.currentPlayer = this.playerOne;
    this.turnsTaken = 0;
  };

  retrieveScores() {
    var parsedPlayers = this.playerOne.retrievePlayersFromStorage();
    this.playerOne.score = parsedPlayers[0].score;
    this.playerTwo.score = parsedPlayers[1].score;
  }

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
    this.changeCurrentPlayer();
  };
  checkForWin() {
    var winConditions = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 4, 8], 
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (var i = 0; i < winConditions.length; i++) {
      if(this.board[winConditions[i][0]] === this.playerOne.token && 
        this.board[winConditions[i][1]] === this.playerOne.token && 
        this.board[winConditions[i][2]] === this.playerOne.token) {
          this.turnsTaken = 0;
          this.playerOne.score++;
          this.savedPlayers = [this.playerOne, this.playerTwo];
          console.log(this.savedPlayers);
          this.playerOne.savePlayersToStorage(this.savedPlayers);
          console.log(localStorage);
          this.board = ['', '', '', '', '', '', '', '', ''];
          return this.playerOne;
      } else if(this.board[winConditions[i][0]] === this.playerTwo.token && 
          this.board[winConditions[i][1]] === this.playerTwo.token && 
          this.board[winConditions[i][2]] === this.playerTwo.token) {
            this.turnsTaken = 0;
            this.playerTwo.score++;
            this.savedPlayers = [this.playerOne, this.playerTwo];
            console.log(this.savedPlayers);
            this.playerTwo.savePlayersToStorage(this.savedPlayers);
            console.log(localStorage);
            this.board = ['', '', '', '', '', '', '', '', ''];
            return this.playerTwo;
        } else if(this.turnsTaken === 9) {
            this.board = ['', '', '', '', '', '', '', '', ''];
              return null;
          }

    }
  };
};