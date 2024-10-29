import express from "express";
import { authMiddleWare } from "../middleware";
import { Amount } from "../models/bank";

const bankRouter = express.Router();

bankRouter.get("/balance", authMiddleWare, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});


bankRouter.post("/transfer", authMiddleWare);

export default bankRouter;
