import { createClient } from "redis";

const client = createClient();

async function main() {
    try {
        await client.connect();
        console.log("connected to redis");

        while (1) {
            const response = await client.brPop("submissions", 0);
            console.log(response, "processed User submissions")
        }
    } catch (error) {
        console.log(error)
    }
}

main();
