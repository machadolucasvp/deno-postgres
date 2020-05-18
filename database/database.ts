import Config from "./config.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const client: Client = new Client(Config);

try{
    await client.connect();
}catch(error) {
    console.log(error.stack);
    throw error;
}

export default client;
