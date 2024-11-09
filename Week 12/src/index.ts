import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



async function createTodo(userId: number, title: string, description: string) {

    const todo = await prisma.todo.create({
        data: {
            userId,
            description,
            title,
        }
    });

    console.log(todo)


}

createTodo(1, "go to gym", "go to gym and do 10 pushups")


// async function createTodo(username: string, password: string, firstName: string, lastName: string) {

//     const todo = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     });

//     console.log(todo)


// }

// createTodo("sangam", "sangam@wsad", "sangam", "mundhe")
