import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawPlayers() {
  let template = ``
  appState.players.forEach(p => template += p.ListTemplate)
  setHTML('players-list', template)
}

function _drawActive() {
  setText('active-player', appState.activePlayer.name)
  setText('current-score', appState.activePlayer.score)
}

function _drawFruit() {
  setText('active-fruit', appState.activeFruit)
}


export class PlayersController {
  constructor() {
    _drawPlayers()
    appState.on('players', _drawPlayers)
    appState.on('activePlayer', _drawActive)
    appState.on('activeFruit', _drawFruit)
  }

  addPlayer() {
    // console.log("test")
    window.event.preventDefault()
    let form = window.event.target
    let newPlayerData = getFormData(form)
    playersService.addPlayer(newPlayerData)
    console.log(newPlayerData);
    // @ts-ignore
    form.reset()
  }

  setActive(playerId) {
    playersService.setActive(playerId)
  }

  randomFruit() {
    playersService.randomFruit()
  }

  checkAnswer() {
    console.log('checking');
  }

}