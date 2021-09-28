// Query Selectors go here 👇🏽
var game = new Game();
var gameBoardGrid = document.getElementById('game-board-grid');
var quadrants = document.querySelectorAll('.quadrant');
var playerScoreHeader = document.getElementById('player-turn-header');


// Event Listeners go here 👇🏽
gameBoardGrid.addEventListener('click', detectGridClick);

//Functions go here 👇🏽



function detectGridClick(event) {
  console.log(game.currentPlayer);
  insertIcon(event);
  updateHeaders();
  var winningPlayer = game.checkForWin();
  declareWinner(winningPlayer);
};

function insertIcon(event) {
  var quadrantID = event.target.id;
    if(game.turnsTaken >= 9) {
      game.turnsTaken = 0;
      return;
    }
    else if(event.target.classList.contains('quadrant') && game.currentPlayer === game.playerOne) {
      event.target.innerHTML += `<img class="ghost" src="assets/ghost.svg" alt="ghost.svg">`;
      event.target.disabled = true;
      game.turnsTaken++;
      game.addToBoard(quadrantID);
  } else if(event.target.classList.contains('quadrant') && game.currentPlayer === game.playerTwo) {
      event.target.innerHTML += `<img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">`;
      event.target.disabled = true;
      game.turnsTaken++;
      game.addToBoard(quadrantID); 

  }

};

function updateHeaders() {
  playerScoreHeader.innerHTML = `${game.currentPlayer.token}'s turn!`;
  };

  function declareWinner(winningPlayer) {
    console.log(winningPlayer);
    console.log('declare winner');
    var player1score = document.getElementById('player1-score');
    var player2score = document.getElementById('player2-score');
    if(winningPlayer) {
      playerScoreHeader.innerHTML = `${winningPlayer.token} wins!`;
      player1score.innerHTML = game.playerOne.score;
      player2score.innerHTML = game.playerTwo.score;
      gameBoardGrid.removeEventListener('click', detectGridClick);
      setTimeout(clearBoard, 2000);
    } else if(!winningPlayer && game.turnsTaken === 9) {
      playerScoreHeader.innerHTML = `Draw!`
      gameBoardGrid.removeEventListener('click', detectGridClick);
      setTimeout(clearBoard, 2000);
    }
  };

  function clearBoard() {
    console.log('clear board')
    var playerScoreHeader = document.getElementById('player-turn-header');
    for(var i = 0; i < quadrants.length; i++) {
      quadrants[i].innerHTML = "";
      quadrants[i].disabled = false;
    }
    playerScoreHeader.innerHTML = `${game.currentPlayer.token}'s turn!`;
    gameBoardGrid.addEventListener('click', detectGridClick);
  };
