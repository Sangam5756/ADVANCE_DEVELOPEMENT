"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(
  amount: number,
  provider: string
){
  const session = await getServerSession(authOptions);
  const token = Math.random().toString();
  // console.log(,session)
  const userId = session?.user?.id;
  if (!userId) {
    return {
      message: "user not logged in",
    };
  }
  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: Number(amount),
      status: "Processing",
      startTime: new Date(),
      provider,
      token: token,
    },
  });

  return {
    message: "On Ramp Transaction Added",
  };
}
