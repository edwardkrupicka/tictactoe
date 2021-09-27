// Query Selectors go here 👇🏽
var game = new Game();
var gameBoardGrid = document.getElementById('game-board-grid');
var cells = document.querySelectorAll('.cell');

// Event Listeners go here 👇🏽
gameBoardGrid.addEventListener('click', takeTurn);

//Functions go here 👇🏽



function takeTurn(event) {
  console.log(event.target.)
  if(event.target.classList.contains('cell') && game.currentPlayer === game.player1) {
      event.target.innerHTML += `<img class="ghost" src="assets/ghost.svg" alt="ghost.svg">`;
      event.target.disabled = true;
      game.changeCurrentPlayer();
      console.log(game.currentPlayer.name);
  } else if(event.target.classList.contains('cell') && game.currentPlayer === game.player2) {
      event.target.innerHTML += `<img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">`;
      event.target.disabled = true;
      game.changeCurrentPlayer();
      console.log(game.currentPlayer.name);
  }
};


// changeTurns(event) {
//   console.log(event.target);
//   if(this.player1.turn) {
//     if(event.target.classList.contains('cell')) {
//       event.target.innerHTML += `<img class="ghost" src="assets/ghost.svg" alt="ghost.svg">`;
//       event.target.disabled = true;
//       player1 = false;
//       player2 = true;
//       console.log(event.target);
      
//     }
//   } else if(this.player2.turn) {
//       if(event.target.classList.contains('cell')) {
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
