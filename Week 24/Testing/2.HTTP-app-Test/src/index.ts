import express from "express"

export const app = express();
app.use(express.json())
// app.listen(3000);

app.post("/sum", (req:any, res:any) => {
    console.log(req.body)
    const { a, b } = req.body;
        if( a > 10000 || b > 10000){
            return res.send
        }

    const result = a + b;
    res.json({ result });
});


