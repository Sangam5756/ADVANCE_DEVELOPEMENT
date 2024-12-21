import { startLoger } from "./logger";
import { gameManager } from "./store";




startLoger();

setInterval(() => {
    gameManager.addGame(Math.floor(Math.random()*100+6).toString())
}, 5000);




