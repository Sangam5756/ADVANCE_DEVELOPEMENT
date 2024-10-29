import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sangammunde3:69ZEogw3grwMXHyk@cluster0.7e0zod4.mongodb.net/paytm"
    );
  } catch (error) {
    console.log(error.message);
  }
};

