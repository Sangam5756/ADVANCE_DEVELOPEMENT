import NextAuth from "next-auth"
import { NEXT_AUTH } from "../../lib/auth"

const handler = NextAuth(NEXT_AUTH)


export const GET = handler
export const POST = handler
























// import { NextRequest, NextResponse } from "next/server";

// export function GET(req: NextRequest, { params: { authRoutes } }: {
//     params: {
//         authRoutes: string[]
//     }
// }) {

//     console.log(authRoutes)


//     return NextResponse.json({
//         message: "Hello World"
//     })
// }