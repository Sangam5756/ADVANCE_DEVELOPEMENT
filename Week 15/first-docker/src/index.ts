
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    })
})

app.post("/", async (req, res) => {
    const data = await client.user.create({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    })

    res.json({
        data: data,
        message: "Done signing up!"
    })
})

app.listen(3000);