import express from "express";
import zod from "zod";
import { User } from "../models/user.js";
import { JWT_SECRET } from "../config.js";

const userRouter = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

userRouter.post("/signup", async (req, res) => {
  const body = req.body;

  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email is already taken / Incorrect inputs",
    });
  }
  const user = await User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "Email is already taken /incorrect inputs",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign({ userid: dbUser._id }, JWT_SECRET);
  res.json({
    message: "User created Successfully",
    token: token,
  });
});

export default userRouter;
