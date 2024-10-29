import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);


