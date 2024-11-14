
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
   try {
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
   } catch (error) {
    res.json({
        message: error
    })
    
   }
})

app.listen(3000);