import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {
  setActive(playerId) {
    console.log(playerId, 'set as active');
    let selectedPlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = selectedPlayer
    console.log(appState.activePlayer)
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
  checkAnswer(form) {
    console.log(form.answer.value, appState.activeFruit);
    if (form.answer.value == appState.activeFruit) {
      appState.activePlayer.score++
      console.log(appState.activePlayer.score)
      appState.emit('activePlayer')
    }

  }

}

export const playersService = new PlayersService()