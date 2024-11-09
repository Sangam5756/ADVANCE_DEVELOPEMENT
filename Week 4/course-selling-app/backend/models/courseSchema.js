import mongoose from "mongoose";

const couresSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    courseDescription: String,
    price: Number,
    imageUrl: String,
  },

  { timestamps: true }
);

const Course = mongoose.model("Course", couresSchema);

export default Course;
