import { NextRequest } from "next/server";
import prisma from "@/app/db";


export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json({
    user: users,
  });
}

export async function POST(req: NextRequest) {
  console.log(req);
  //   need to use await to get req
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    }, 
  });

  return Response.json({
    Req: user,
    message: "Signup Successfull",
  });
}
