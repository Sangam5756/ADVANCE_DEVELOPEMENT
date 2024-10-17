import express from "express";
import Admin from "../models/adminSchema.js";
import Course from "../models/courseSchema.js";
import { authAdmin } from "../middleware/auth.js";




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

adminRouter.post("/login", authAdmin, async (req, res) => {
  try {
    res.send("Login successfull");
  } catch (error) {
    res.send(error.message);
  }
});

adminRouter.post("/courses", authAdmin, async (req, res) => {
  try {
    console.log("requser", req.user);
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
