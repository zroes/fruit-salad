import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  playersController = new PlayersController();
}

window["app"] = new App();
