import express from "express";
import { dbConnect } from "./db.js";
import cors from "cors";
import userRouter from "./routes/user.js";
import bankRouter from "./routes/bank.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", bankRouter);

dbConnect()
  .then(() => {
    console.log("connected to db");

    app.listen(PORT, () => {
      console.log("server is listening on port 5000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

//   https://github.com/ShreyasPrabhu26/paytm-v1/blob/main/backend/controllers/bank.js
