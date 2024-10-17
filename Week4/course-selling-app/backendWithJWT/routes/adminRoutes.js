import express from "express";
import Admin from "../models/adminSchema.js";
import Course from "../models/courseSchema.js";
import { authAdmin } from "../middleware/auth.js";
import JWT from "jsonwebtoken";

const adminRouter = express.Router();

adminRouter.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Admin.find({ username: username });
    console.log(user);
    if (user.length > 0) {
      return res.send("user exists");
    }

    const admin = new Admin({
      username: username,
      password: password,
    });

    await admin.save();

    res.send("Signup successfully");
  } catch (error) {
    res.send(error.message);
  }
});

adminRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username: username });

    if (admin) {
      if (admin.password === password) {
        const token = JWT.sign({ username }, "secret");

        res.json({
          message: token,
        });
      }
    } else {
      res.send("invalid credential");
    }
  } catch (error) {
    res.send(error.message);
  }
});

adminRouter.post("/courses", authAdmin, async (req, res) => {
  try {
    const { title, description, courseDescription, price } = req.body;
    const course = await new Course(req.body);
    await course.save();

    res.json({ message: "course added successfully", data: course });
  } catch (error) {
    res.send(error.message);
  }
});

adminRouter.get("/courses", authAdmin, async (req, res) => {
  try {
    console.log("requser", req.user);
    const course = await Course.find({});
    res.json({
      message: "all course",
      data: course,
    });
  } catch (error) {
    res.send(error.message);
  }
});

export default adminRouter;
