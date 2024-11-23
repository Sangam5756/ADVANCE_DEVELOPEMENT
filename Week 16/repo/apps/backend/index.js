import express from "express";

const app = express();


app.listen(5000, () => {
  console.log("listening on port 5000");
});


app.get("/", (req, res) => {
  res.send("I am Root");
});
