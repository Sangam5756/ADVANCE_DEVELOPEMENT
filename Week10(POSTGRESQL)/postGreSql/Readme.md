# connect to postgresql

- for connection to db we neet pg package
- npm i pg

# import {Client} from "pg"

### use the client.connect(

    {connectionString:"dbstring"}

)

# or

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