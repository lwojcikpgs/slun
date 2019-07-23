import * as express from 'express';
import { plainToClass } from "class-transformer";
import { validate } from 'class-validator';
import { ClassType } from 'class-transformer/ClassTransformer';

export default function <T>(classType: ClassType<T>) {
    return async (req: express.Request & { viewModel?: T }, res: express.Response, next: express.NextFunction): Promise<void> => {
        const viewModel = plainToClass<T, any>(classType, req.body);
        console.log(viewModel);
        const validationResult = await validate(viewModel)

        if (validationResult.length > 0) {
            next(validationResult)
        } else {
            req.viewModel = viewModel;
            next();
        }
    }
}