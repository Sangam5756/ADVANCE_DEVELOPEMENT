import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());
const client = createClient();

app.post("/submit", async (req, res) => {
    try {
        const { problemId, userId, code, language } = req.body;

        await client.lPush(
            "submissions",
            JSON.stringify({ problemId, userId, code, language })
        );
        res.json({
            message: "submission received!",
        });
    } catch (error) {
        res.json({
            message: "error in submission",
        });
    }
});

async function startserver() {
    await client.connect();
    console.log("Connected to redis");

    app.listen(3000, () => {
        console.log("server is started at port 3000");
    });
}

startserver();
