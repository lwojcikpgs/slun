import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import * as config from "./config";
import userRouter from './areas/users/controller';
import * as proxy from 'http-proxy-middleware';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(proxy('http://localhost:8000/api/orders'));
app.use(proxy('http://localhost:8001/api/cdn'));
app.use(proxy('http://some.external.api.test:9002/api/external'));

app.use('/api/users', userRouter);

app.listen(config.port, () => {
    console.log(`app is runnint: http://localhost:${config.port}`)
});
