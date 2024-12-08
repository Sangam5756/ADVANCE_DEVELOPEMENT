"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = (0, redis_1.createClient)();
app.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sub = yield client.RPOP("submissions");
    res.json({
        sub: sub
    });
}));
app.post("/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { problemId, userId, code, language } = req.body;
    yield client.lPush("submissions", JSON.stringify({ problemId, userId, code, language }));
    res.json({
        message: "submission received!"
    });
}));
function startserver() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log("Connected to redis");
        app.listen(3000, () => {
            console.log("server is started at port 3000");
        });
    });
}
startserver();
