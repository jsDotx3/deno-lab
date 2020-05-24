import { config } from "dotenv/mod.ts";
const loadConfig = config({ path: './.env' });

export default {
    database: {
        hostname: loadConfig.DATABASE_HOSTNAME,
        port: parseInt(loadConfig.DATABASE_PORT || '3306'),
        username: loadConfig.DATABASE_USERNAME,
        password: loadConfig.DATABASE_PASSWORD,
        db: loadConfig.DATABASE_NAME
    },
    server: {
        hostname: loadConfig.HOST_NAME || "0.0.0.0",
        port: parseInt(loadConfig.HOST_PORT || '3000')
    }
}