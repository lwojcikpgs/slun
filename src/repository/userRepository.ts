import BaseRepository, { RepositorySchema } from './baseRepository';
import { IUserModel } from '../types/user';

const userSchema: RepositorySchema<IUserModel> = {
    firstName: { type: String, required: false, default: null },
    lastName: { type: String, required: false, default: null },
    age: { type: Number, default: 18 }
};

class UserRepository extends BaseRepository<IUserModel> {
    constructor() {
        super('user', userSchema);
    }
}

export const userRepository = new UserRepository();