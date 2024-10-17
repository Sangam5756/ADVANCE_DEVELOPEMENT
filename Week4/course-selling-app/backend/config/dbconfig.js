import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    res.send("error in DB");
  }
};

export default dbconnect;
