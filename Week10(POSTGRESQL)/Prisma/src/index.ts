import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertData(email: string, password: string, lastName: string, firstName: string) {

    const res = await prisma.user.create({
        data: {
            email,
            firstName,
            password,
            lastName
        },
        select: {
            id: true,
            email: true
        }

    })

    console.log(res)

}