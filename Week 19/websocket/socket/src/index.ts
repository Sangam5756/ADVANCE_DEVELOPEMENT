// USING EXPRESS
import express from "express"
import { WebSocket, WebSocketServer } from "ws"


const app = express();
const httpserver = app.listen(8080, () => {
    console.log(((new Date()) + "server is listening on 8080"))
})

const wss = new WebSocketServer({ server: httpserver })
let usercount = 0;

wss.on("connection", (ws) => {

    ws.on("error", console.error)

    ws.on("message", (data, isbinary) => {

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isbinary })
            }
        });

    });
    console.log("user count", ++usercount);
ws.close("",()=>{
    console.log("user count", --usercount);

})
    // ws.send("Hello From The Server")
});


// import WebSocket, { WebSocketServer } from "ws";
// import http from "http";


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

