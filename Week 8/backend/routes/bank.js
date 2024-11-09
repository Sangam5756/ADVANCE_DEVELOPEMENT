import express from "express";
import { authMiddleWare } from "../middleware.js";
import { Account } from "../models/bank.js";
import mongoose from "mongoose";

const bankRouter = express.Router();

bankRouter.get("/root", authMiddleWare, (req, res) => {
  res.send("root");
});

bankRouter.get("/balance", authMiddleWare, async (req, res) => {
  console.log(req.userId);
  const account = await Account.findOne({
    userId: req.userId,
  });
  // const account = await Account.find({});

  res.json({
    balance: account.balance,
  });
});

bankRouter.post("/transfer", authMiddleWare, async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const { amount, to } = req.body;

    // fetch the account balance
    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid account",
      });
    }

    // Perform the transfer
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  res.json({
    message: "Transfer successful",
  });
});

export default bankRouter;
