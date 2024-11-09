import Admin from "../models/adminSchema.js";
import User from "../models/userSchema.js";
import JWT from "jsonwebtoken";

export const authAdmin = async (req, res, next) => {
  try {
    const word = req.headers.authorization.split(" ");
    const token = word[1];

    const decode = JWT.verify(token, "secret");

    const admin = await Admin.findOne({ username: decode.username });

    if (!admin) {
      throw new Error("invalid credential");
    }

    next();
  } catch (error) {
    res.send("invalid credential");
  }
};

export const authUser = async (req, res, next) => {
  try {
    const word = req.headers.authorization.split(" ");
    const token = word[1];

    if (!token) {
      throw new Error("invalid token");
    }
    const decode = JWT.verify(token, "secret");
    const user = await User.findOne({ username: decode.username });
    if (user) {
      req.user = user;
      req.id = user._id;
      next();
    } else {
      throw new Error("invalid credential");
    }
  } catch (error) {
    res.json({
      message: "invalid credential",
    });
  }
};
