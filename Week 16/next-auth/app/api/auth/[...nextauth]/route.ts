import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "username", type: "text", placeholder: "Email" },
                password: { label: "password", type: "password", placeholder: "Password" },
            },

            async authorize(credentials: any) {
                console.log(credentials)
                return {
                    id: "user1",
                    name: "sangam mundhe",
                    email: "sangammunde3@gmail.com"



                };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET

})


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