"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLoger = startLoger;
const store_1 = require("./store");
function startLoger() {
    setInterval(() => {
        store_1.gameManager.log();
    }, 5000);
}
