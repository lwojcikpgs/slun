import * as express from 'express';
import UserDto from './userDto';
import viewModelValidator from '../../utils/middlewares/modelValidation';
import isAuthorized from '../../utils/middlewares/isAuthorized';

var router = express.Router();
let fakeUsersList: UserDto[] = [];
router.use(isAuthorized());

router.post('/', viewModelValidator(UserDto), (req: express.Request & { viewModel: UserDto }, res) => {
    fakeUsersList = [...fakeUsersList, req.viewModel];
    res.send({ id: fakeUsersList.length });
});

router.get('/:id', (req: express.Request, res) => {
    const { params } = req;

    res.send(fakeUsersList[params.id]);
});

router.get('/', (req: express.Request, res) => {
    res.send(fakeUsersList);
});

export default router;