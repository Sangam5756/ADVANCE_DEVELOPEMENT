"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
const jwt_secret = "secret";
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const token = jsonwebtoken_1.default.sign({ id: 1 }, jwt_secret);
    res.cookie("token", token);
    res.send("logged in");
});
app.post("/login", (req, res) => {
    const token = req.cookies.token;
    const decode = jsonwebtoken_1.default.verify(token, jwt_secret);
    // Get email of the user from the database
    res.send({
        userId: decode.id
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    });
});
app.listen(3000);
