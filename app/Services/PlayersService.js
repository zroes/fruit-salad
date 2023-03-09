import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {
  setActive(playerId) {
    console.log(playerId, 'set as active');
    let selectedPlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = selectedPlayer
  }

  addPlayer(newPlayerData) {
    let newPlayer = new Player(newPlayerData)
    appState.players.push(newPlayer)
    appState.emit('players')
  }



}

export const playersService = new PlayersService()