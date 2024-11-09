import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertData(userName: string, password: string) {

    const res = await prisma.login.create({
        data: {
            userName,
            password,
        },
        select: {
            id: true,
            userName: true
        }

    })

    console.log(res)

}

insertData("Parm" , "Sangam")
// async function insertData(email: string, password: string, lastName: string, firstName: string) {

//     const res = await prisma.user.create({
//         data: {
//             email,
//             firstName,
//             password,
//             lastName
//         },
//         select: {
//             id: true,
//             email: true
//         }

//     })

//     console.log(res)

// }


interface updateParams {
    firstName: string,
    lastName: string
}

async function updateUser(email: string, {
    firstName,
    lastName
}: updateParams) {

    const res = await prisma.user.update({
        where: { email: email },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}

// updateUser("sangam@gmail.com", { firstName: "Mundhe", lastName: "Sangam" });

async function getUser() {
    const res = await prisma.user.findMany();
    console.log(res)
    
}

// getUser();