import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPlayers() {
  let template = ``
  appState.players.forEach(p => template += p.ListTemplate)
  setHTML('players-list', template)
}


export class PlayersController {
  constructor() {
    _drawPlayers()
  }
}