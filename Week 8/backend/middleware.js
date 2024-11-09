import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";

export const authMiddleWare = (req, res, next) => {
    console.log("checking auth")
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];
  console.log(token,"inside the auth");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded)
    if (decoded) {
      req.userId = decoded.userId;
      next();
    }
  } catch (error) {
    return res.status(403).json({});
  }
};
