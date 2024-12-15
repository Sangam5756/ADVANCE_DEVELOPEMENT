import { startLoger } from "./logger";
import { games } from "./store";


startLoger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: "sangam",
        blackPlayerName: "parm",
        moves: []

    })
}, 5000);
