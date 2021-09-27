// Query Selectors go here 👇🏽
var game = new Game();
var gameBoardGrid = document.getElementById('game-board-grid');
var quadrants = document.querySelectorAll('.quadrant');

// Event Listeners go here 👇🏽
gameBoardGrid.addEventListener('click', takeTurn);

//Functions go here 👇🏽



function takeTurn(event) {
  var quadrantID = event.target.id;
  if(event.target.classList.contains('quadrant') && game.currentPlayer === game.playerOne) {
      event.target.innerHTML += `<img class="ghost" src="assets/ghost.svg" alt="ghost.svg">`;
      event.target.disabled = true;
      game.addToBoard(quadrantID);
      game.changeCurrentPlayer();
  } else if(event.target.classList.contains('quadrant') && game.currentPlayer === game.playerTwo) {
      event.target.innerHTML += `<img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">`;
      event.target.disabled = true;
      game.addToBoard(quadrantID);
      game.changeCurrentPlayer();
  }
};


// changeTurns(event) {
//   console.log(event.target);
//   if(this.player1.turn) {
//     if(event.target.classList.contains('quadrant')) {
//       event.target.innerHTML += `<img class="ghost" src="assets/ghost.svg" alt="ghost.svg">`;
//       event.target.disabled = true;
//       player1 = false;
//       player2 = true;
//       console.log(event.target);
      
//     }
//   } else if(this.player2.turn) {
//       if(event.target.classList.contains('quadrant')) {
//         event.target.innerHTML += `<img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">`;
//         event.target.disabled = true;
//         player2 = false;
//         player1 = true;
//         console.log(event.target);
//     }
//   }
// }

// <img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">
// <img class="ghost" src="assets/spooky.svg" alt="spooky.svg">
