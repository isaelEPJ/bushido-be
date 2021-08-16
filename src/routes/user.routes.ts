import { Router } from 'express';
import { AuthUsersController } from '../modules/users/authUser/AuthUsersController';
import { CreateUsersController } from '../modules/users/CreateUsersUserCase/createUsersController';
import { ListUsersController } from '../modules/users/listUsersUserCase/listUsersController';

const userRoute = Router();
const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const authUsersController = new AuthUsersController();

userRoute.get('/', listUsersController.handle);

userRoute.post('/create', createUsersController.handle);

userRoute.post('/login', authUsersController.build);

export { userRoute };
