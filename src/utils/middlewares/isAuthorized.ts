import * as express from 'express';

export default function (hasToBeAuthorized: boolean = true) {
    return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
        const authHeader = req.header('welcome');

        if (!!authHeader) {
            next();
        } else {
            res.status(403).send({ unauthorized: true });
        }
    }
}