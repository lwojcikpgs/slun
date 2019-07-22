import * as dotenv from 'dotenv';
import { cleanEnv, port as isPort } from 'envalid';
dotenv.config();

cleanEnv(process.env, {
    PORT: isPort(),
});

export const port = process.env.PORT;