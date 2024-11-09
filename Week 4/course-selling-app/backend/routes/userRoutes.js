import express from "express";
import User from "../models/userSchema.js";
import Course from "../models/courseSchema.js";
import { authUser } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.find({ username: username });
    console.log(user);
    if (user.length > 0) {
      return res.send("user exists");
    }

    const admin = new User({
      username: username,
      password: password,
    });

    await admin.save();

    res.json({ message: "Signup successfully", data: admin });
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.send("Invalid credential");
    }

    if (user.password === password) {
      return res.send("login successfull");
    } else {
      res.send("invalid credential");
    }
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.get("/courses", authUser, async (req, res) => {
  try {
    const user = req.user;
    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourse,
      },
    });

    res.json({
      message: "ALL courses",
      courses: courses,
    });
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.get("/course/:id", authUser, async (req, res) => {
  try {
    const { id } = req.params;

    const userId = req.id;

    const isCourseAvailable = await Course.findById(id);

    if (!isCourseAvailable) {
      return res.json({ message: "Course is Unavailable" });
    }

    const coursed = await User.findByIdAndUpdate(req.id, {
      $push: { purchasedCourse: id },
    });
    console.log(coursed);

    res.json({
      message: "Course purchased successfully",
    });
  } catch (error) {
    res.send(error.message);
  }
});

export default userRouter;
