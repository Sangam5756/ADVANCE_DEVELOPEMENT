"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                userId,
                description,
                title,
            }
        });
        console.log(todo);
    });
}
createTodo(1, "go to gym", "go to gym and do 10 pushups");
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
