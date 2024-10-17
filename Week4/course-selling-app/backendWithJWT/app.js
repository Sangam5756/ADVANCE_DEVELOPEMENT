import express from "express";
import { configDotenv } from "dotenv";
import adminRouter from "./routes/adminRoutes.js";
import dbconnect from "./config/dbconfig.js";
import userRouter from "./routes/userRoutes.js";
configDotenv();

const app = express();
app.use(express.json());
const PORT = 5000;

app.use("/admin", adminRouter);
app.use("/user", userRouter);

dbconnect()
  .then(() => {
    console.log("Connected to Db");

    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("db connection error");
  });
