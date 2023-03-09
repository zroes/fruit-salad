import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {
  setActive(playerId) {
    console.log(playerId, 'set as active');
    let selectedPlayer = appState.players.find(p => p.id == playerId)
    console.log(selectedPlayer)
    appState.activePlayer = selectedPlayer
  }

  addPlayer(newPlayerData) {
    let newPlayer = new Player(newPlayerData)
    appState.players.push(newPlayer)
    appState.emit('players')
  }

  randomFruit() {
    let randomIndex = (Math.floor(Math.random() * appState.fruits.length))
    appState.activeFruit = appState.fruits[randomIndex]
  }

}

export const playersService = new PlayersService()