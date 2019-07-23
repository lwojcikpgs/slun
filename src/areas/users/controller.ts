import * as express from 'express';
import UserDto from './userDto';
import viewModelValidator from '../../utils/middlewares/modelValidation';
import isAuthorized from '../../utils/middlewares/isAuthorized';
import { userRepository } from '../../repository/userRepository';

var router = express.Router();
router.use(isAuthorized());

router.post('/', viewModelValidator(UserDto), async (req: express.Request & { viewModel: UserDto }, res) => {
    const dbModel = await userRepository.create(req.viewModel);
    res.send({ id: dbModel._id });
});

router.get('/:id', async (req: express.Request, res) => {
    const { params } = req;
    const { id } = params;
    const user = await userRepository.findById(id);
    res.send(user);
});

router.get('/', async (req: express.Request, res) => {
    const userList = await userRepository.find();
    res.send(userList);
});

export default router;