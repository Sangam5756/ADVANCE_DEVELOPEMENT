import express from "express"
import { createClient } from "redis"


const app = express();
app.use(express.json())
const client = createClient();


app.get("/get", async (req, res) => {

    const sub = await client.RPOP("submissions");
    res.json({
        sub: sub
    })


})

app.post("/submit", async (req, res) => {

    const { problemId, userId, code, language } = req.body;

    await client.lPush("submissions", JSON.stringify({ problemId, userId, code, language }))
    res.json({
        message: "submission received!"
    });




})


async function startserver() {

    await client.connect();
    console.log("Connected to redis")

    app.listen(3000, () => {
        console.log("server is started at port 3000")
    })

}


startserver();