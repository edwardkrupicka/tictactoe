// Query Selectors go here 👇🏽
var gameBoardGrid = document.getElementById('game-board-grid');

// Event Listeners go here 👇🏽
gameBoardGrid.addEventListener('click', detectGameGridEvent);

//Functions go here 👇🏽
var player1 = true;
var player2 = false;

function detectGameGridEvent(event) {
  console.log('before 4loop', player1);
  if(player1) {
    if(event.target.classList.contains('cell')) {
      event.target.innerHTML += `<img class="spooky" src="assets/spooky.svg" alt="spooky.svg">`;
      event.target.disabled = true;
      player1 = false;
      player2 = true;
      console.log('after 4 loop', player1);
      // console.log(player2);
    }
  } else if(player2) {
      if(event.target.classList.contains('cell')) {
        event.target.innerHTML += `<img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">`;
        event.target.disabled = true;
        player2 = false;
        player1 = true;
      }
  }
}

// <img class="black-cat" src="assets/black-cat.svg" alt="black-cat.svg">
// <img class="ghost" src="assets/spooky.svg" alt="spooky.svg">
