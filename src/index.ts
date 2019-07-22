import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import * as config from "./config";
import userRouter from './areas/users/controller';
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api/users', userRouter);

app.listen(config.port, () => {
    console.log(`app is runnint: http://localhost:${config.port}`)
});
