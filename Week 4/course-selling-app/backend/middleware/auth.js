import Admin from "../models/adminSchema.js";
import User from "../models/userSchema.js";

export const authAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.headers;

    const admin = await Admin.findOne({ username: username });

    if (!admin) {
      throw new Error("invalid credential");
    } else {
      if (admin.password !== password) {
        throw new Error("invalid credential");
      }
    }

    next();
  } catch (error) {
    res.send("invalid credential");
  }
};

export const authUser = async (req, res, next) => {
  try {
    const { username, password } = req.headers;

    const user = await User.findOne({ username: username });
    req.id = user._id;
    req.user = user;
    console.log(req.id);
    if (!user) {
      throw new Error("invalid credential");
    } else {
      if (user.password !== password) {
        throw new Error("invalid credential");
      }
    }

    next();
  } catch (error) {
    res.json({
      message: "invalid credential",
    });
  }
};
