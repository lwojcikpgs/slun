import 'dotenv/config';
import { cleanEnv, port as isPort, str } from 'envalid';

cleanEnv(process.env, {
    PORT: isPort(),
    MONGO_DB: str()
});

export const port = process.env.PORT;
export const dbConnectionString = process.env.MONGO_DB;