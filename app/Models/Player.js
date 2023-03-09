import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Player {

  constructor(data) {

    this.id = generateId()
    this.name = data.name
    this.score = 0
    this.topScore = 0

  }

  get ListTemplate() {
    return `
    <h5>${this.name} | ${this.topScore}
    `
  }

  get ActiveTemplate() {
    return `
    <h3>${appState.activePlayer.name}</h3>}
    `
  }

}