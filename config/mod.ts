import { config } from "https://deno.land/x/dotenv/mod.ts";
const loadConfig = config({ path: './.env' });

export default {
    database: {
        hostname: loadConfig.DATABASE_HOSTNAME,
        port: parseInt(loadConfig.DATABASE_PORT || '3306'),
        username: loadConfig.DATABASE_USERNAME,
        password: loadConfig.DATABASE_PASSWORD,
        db: loadConfig.DATABASE_NAME
    }
}