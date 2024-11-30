import {Client} from "pg";



const client = new Client({connectionString:process.env.POSTGRESURL})





async function createUserTable(){
    await client.connect();
    const result  = await client.query(
        'CREATE TABLE users( id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL,email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL,create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP );'
    )

    console.log(result)
}


// createUserTable();


async function insertData(username:string,email:string,password:string) {

    const client = new Client({
        host:"ep-proud-brook-a5zz0g5c.us-east-2.aws.neon.tech",
        port:5432,
        database:"cohort",
        user:"cohort_owner",
        password:"sBDHJ1qxX8jS",
        ssl: {
            rejectUnauthorized: true // Set to true in production if you have certificates
        }
        
    })

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
        await client.connect();

        const insertQuery = "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)"
        // const values = [username,email,password]
        const values = ["wsad","wsad@gmail.com","abc"]
        const result  = await client.query(insertQuery,values);
        console.log("insertion success",result)


    } catch (error) {
        console.log("error during insertion",error)

        
    }finally{
        client.end();
    }

}

// insertData("asds","sdfdsf","sdfdsf");


async function getdata() {

    const client = new Client({
        host:"ep-proud-brook-a5zz0g5c.us-east-2.aws.neon.tech",
        port:5432,
        database:"cohort",
        user:"cohort_owner",
        password:"sBDHJ1qxX8jS",
        ssl: {
            rejectUnauthorized: true // Set to true in production if you have certificates
        }
        
    })

    try {
        await client.connect();

        const getQuery = "SELECT * FROM users"
        const result  = await client.query(getQuery);
        console.log("insertion success",result.rows)


    } catch (error) {
        console.log("error during insertion",error)

        
    }finally{
        client.end();
    }


}



getdata()