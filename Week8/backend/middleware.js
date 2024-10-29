import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

export const authMiddleWare = (req, res, next) => {
  const authHeader = req.header.authrization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split("")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      req.userid = decoded.userid;
      next();
    }
  } catch (error) {
    return res.status(403).json({});
  }
};
