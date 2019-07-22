import * as express from 'express';
import UserDto from './userDto';
import viewModelValidator from '../../utils/middlewares/modelValidation';
import isAuthorized from '../../utils/middlewares/isAuthorized';
import { userRepository } from '../../repository/userRepository';

var router = express.Router();
let fakeUsersList: UserDto[] = [];
router.use(isAuthorized());

router.post('/', viewModelValidator(UserDto), async (req: express.Request & { viewModel: UserDto }, res) => {
    fakeUsersList = [...fakeUsersList, req.viewModel];

    res.send({ id: fakeUsersList.length });
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