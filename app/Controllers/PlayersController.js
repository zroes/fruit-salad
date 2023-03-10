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

function _endGame() {
  window.alert("game over!")
  let currentPlayer = appState.players.find(player => player.id == appState.activePlayer.id)
  if (appState.activePlayer.score > currentPlayer.topScore) {
    currentPlayer.topScore = appState.activePlayer.score
  }
  currentPlayer.score = 0
  console.log(currentPlayer);
  // appState.activePlayer = null;
  document.getElementById('score').classList.add('d-none')
  document.getElementById('game').classList.add('d-none')
  document.getElementById('active-player').classList.add('d-none')
  appState.emit('players')
  document.getElementById('answer').disabled = true
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
    document.getElementById('score').classList.remove('d-none')
    document.getElementById('game').classList.remove('d-none')
    document.getElementById('active-player').classList.remove('d-none')
  }

  randomFruit() {
    playersService.randomFruit()
  }

  checkAnswer() {
    window.event.preventDefault()
    let form = window.event.target
    playersService.checkAnswer(form)
    form.reset()
  }

  startGame() {
    this.randomFruit()
    setTimeout(_endGame, 5000)
    document.getElementById('answer').disabled = false
    document.getElementById('answer').focus()
  }

}