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
const pg_1 = require("pg");
const client = new pg_1.Client({ connectionString: process.env.POSTGRESURL });
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query('CREATE TABLE users( id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL,email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL,create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP );');
        console.log(result);
    });
}
// createUserTable();
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: "ep-proud-brook-a5zz0g5c.us-east-2.aws.neon.tech",
            port: 5432,
            database: "cohort",
            user: "cohort_owner",
            password: "sBDHJ1qxX8jS",
            ssl: {
                rejectUnauthorized: true // Set to true in production if you have certificates
            }
        });
        // try {
        //     await client.connect();
        //     const insertQuery = "INSERT INTO users(username,email,password) VALUES ('username2','username2@gmail.com','sangam@wsad')"
        //     const result  = await client.query(insertQuery);
        //     console.log("insertion success",result)
        // } catch (error) {
        //     console.log("error during insertion",error)
        // }finally{
        //     client.end();
        // }
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)";
            // const values = [username,email,password]
            const values = ["wsad", "wsad@gmail.com", "abc"];
            const result = yield client.query(insertQuery, values);
            console.log("insertion success", result);
        }
        catch (error) {
            console.log("error during insertion", error);
        }
        finally {
            client.end();
        }
    });
}
// insertData("asds","sdfdsf","sdfdsf");
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: "ep-proud-brook-a5zz0g5c.us-east-2.aws.neon.tech",
            port: 5432,
            database: "cohort",
            user: "cohort_owner",
            password: "sBDHJ1qxX8jS",
            ssl: {
                rejectUnauthorized: true // Set to true in production if you have certificates
            }
        });
        try {
            yield client.connect();
            const getQuery = "SELECT * FROM users";
            const result = yield client.query(getQuery);
            console.log("insertion success", result.rows);
        }
        catch (error) {
            console.log("error during insertion", error);
        }
        finally {
            client.end();
        }
    });
}
getdata();
