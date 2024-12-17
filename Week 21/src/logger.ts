import { gameManager } from "./store"




export function startLoger() {

    setInterval(() => {
        gameManager.log()
    }, 5000)
}