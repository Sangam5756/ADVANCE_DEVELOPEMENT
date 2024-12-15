import { games } from "./store";

export function startLoger() {

    setInterval(() => {
        console.log(games)
    }, 5000)
}