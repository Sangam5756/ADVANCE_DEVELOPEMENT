import express from "express";
import { authMiddleWare } from "../middleware";

const bankRouter = express.Router();

bankRouter.get("/balance", authMiddleWare);
bankRouter.post("/transfer", authMiddleWare);

export default bankRouter;
