import express from "express";
import { createTodo, updateTodo } from "./types.js";
import mongoose from "mongoose";
import todo from "./db.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      throw new Error("title is not valid");
    }
    if (!description) {
      throw new Error("description is not valid");
    }
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "you sent wrong inputs",
      });
      return;
    }

    // put  it into mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.send("todo is created");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const data = await todo.find({});
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

app.put("/completed", async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "you sent wrong inputs",
      });
    }

    const update = await todo.findByIdAndUpdate(req.body.id, {
      completed: true,
    });

    res.send("Todo is updated Successfully");
  } catch (error) {
    res.send(error.messge);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params);
    const createPayload = req.params;
    console.log(createPayload);
    const parsedPayload = updateTodo.safeParse(req.params);

    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "you sent wrong inputs",
      });
    }

    const update = await todo.findByIdAndDelete(createPayload.id); // This line will fail

    res.send("Todo is deleted Successfully");
  } catch (error) {
    res.send(error.messge);
  }
});


mongoose
  .connect(
    "mongodb+srv://sangammunde3:69ZEogw3grwMXHyk@cluster0.7e0zod4.mongodb.net/todo"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server is listening on port 5000");
    });
    console.log("connected to db");
  })
  .catch((err) => console.log(err.message));
