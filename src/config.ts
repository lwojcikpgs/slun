import * as dotenv from 'dotenv';
import { cleanEnv, port as isPort, str } from 'envalid';
dotenv.config();

cleanEnv(process.env, {
    PORT: isPort(),
    MONGO_DB: str()
});

export const port = process.env.PORT;
export const dbConnectionString = process.env.MONGO_DB;