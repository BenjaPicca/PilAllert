import pg from "pg"; 
import "dotenv/config";

const { Pool } = pg;

export const pool = new Pool({
    user: "neondb_owner",
    host: "ep-restless-fog-adwmkzyo-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    password: "npg_9zMqaX6whboi",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
