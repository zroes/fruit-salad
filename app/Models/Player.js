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
    <div class="col-6">
      <p class="cursor-pointer" onclick="app.playersController.setActive(${this.id})">${this.name}</p>
    </div>
    <div class=" text-end col-6">
      <p>Highscore: ${this.topScore}</p>
    </div>
    `
  }

}