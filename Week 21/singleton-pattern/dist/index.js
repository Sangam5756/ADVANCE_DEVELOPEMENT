"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLoger)();
setInterval(() => {
    store_1.gameManager.addGame(Math.floor(Math.random() * 100 + 6).toString());
}, 5000);
