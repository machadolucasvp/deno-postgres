import { config } from 'https://deno.land/x/dotenv/mod.ts';

const ENV = config();

export default {
    hostname: ENV.HOSTNAME,
    user: ENV.USER,
    password: ENV.PASSWORD,
    database: ENV.DATABASE,
    port: parseInt(ENV.PORT),
}