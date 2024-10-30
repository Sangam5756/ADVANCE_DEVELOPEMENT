import express from "express";
import zod from "zod";
import { User } from "../models/user.js";
import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
const userRouter = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

userRouter.post("/signup", async (req, res) => {
  const body = req.body;

  const { success } = signupSchema.safeParse(req.body);
  console.log(success, req.body);
  if (!success) {
    return res.json({
      message: "Email is already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: body.username,
  });

  console.log(user);
  if (user !== null) {
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

userRouter.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

userRouter.put("/", async (req, res) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.updateOne(req.body, {
    _id: req.userId,
  });

  res.json({
    message: "Updated successfully",
  });
});

userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      { firstName: { $regex: filter, $options: "i" } },
      { lastName: { $regex: filter, $options: "i" } },
    ],
  });

  res.json({
    user: users.map((user) => ({
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    })),
  });
});

export default userRouter;
