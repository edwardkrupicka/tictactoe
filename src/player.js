class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.score = 0;

  }
  savePlayersToStorage(array) {
    var stringifiedPlayers = JSON.stringify(array);
    localStorage.setItem('stringifiedPlayers', stringifiedPlayers);
  };
  retrievePlayersFromStorage() {
    var retrievedPlayers = localStorage.getItem('stringifiedPlayers');
    var parsedPlayers = JSON.parse(retrievedPlayers);
    return parsedPlayers;
  };
};
