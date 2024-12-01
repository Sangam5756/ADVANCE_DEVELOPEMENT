"use strict";
// import WebSocket, { WebSocketServer } from "ws";
// import http from "http";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer((req, res) => {
//     console.log((new Date()) + "Received Request for" + req.url)
//     res.end("hi there");
// })
// const wss = new WebSocketServer({ server })
// let usercount = 0;
// wss.on("connection", (ws) => {
//     ws.on("error", console.error);
//     ws.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });
//     console.log("user count", ++usercount)
//     ws.send('Hello! Message From Server!!');
// })
// server.listen(8080, function () {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });
// USING EXPRESS
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const httpserver = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpserver });
wss.on("connection", (ws) => {
    ws.on("error", console.error);
    ws.on("message", (data, isbinary) => {
        console.log("received :%s", data);
    });
});
