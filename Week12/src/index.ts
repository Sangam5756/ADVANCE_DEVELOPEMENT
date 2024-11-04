import { Client } from "pg";


const client = new Client({
    connectionString: "postgresql://postgres:sangam@123@localhost/postgres"
})

async function createUserTable() {
    await client.connect();

    const result = await client.query(`
        CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`
    )
    console.log(result);
}

// createUserTable();



async function get() {
    await client.connect();

    const result = await client.query(`
       SELECT *  FROM addresses;`)
    console.log(result)
}

// get();
async function insertdata()

{
    await client.connect();

    const result = await client.query(`
       INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (3, 'INDIA', 'INDIAN', 'Kharadi Pune', '10001');`)
    console.log(result)

}



insertdata();