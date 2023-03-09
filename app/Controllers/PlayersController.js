import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPlayers() {
  let template = ``
  appState.players.forEach(p => template += p.ListTemplate)
  setHTML('players-list', template)
}


export class PlayersController {
  constructor() {
    _drawPlayers()
    appState.on('players', _drawPlayers)
  }

  addPlayer() {
    console.log('adding player');
    event.preventDefault()
    let form = window.event.target
    let newPlayerData = getFormData(form)
    playersService.addPlayer(newPlayerData)
    // @ts-ignore
    form.reset()
  }

  setActive(playerId) {
    playersService.setActive(playerId)
  }

}