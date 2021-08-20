import { Router } from 'express';
import { AuthUsersController } from '../modules/users/authUser/AuthUsersController';
import { CreateUsersController } from '../modules/users/CreateUsersUserCase/createUsersController';
import { ListUsersController } from '../modules/users/listUsersUserCase/listUsersController';
import { RemoveUserController } from '../modules/users/removeUserUserCase/removeUserController';
import { UpdateUserController } from '../modules/users/updateuserUserCase/updateuserController';

const userRoute = Router();
const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const authUsersController = new AuthUsersController();
const removeUserController = new RemoveUserController();
const updateUserController = new UpdateUserController();

userRoute.get('/', listUsersController.handle);

userRoute.post('/create', createUsersController.handle);

userRoute.post('/login', authUsersController.build);

userRoute.delete('/delete', removeUserController.build);

userRoute.patch('/update', updateUserController.build);

export { userRoute };
