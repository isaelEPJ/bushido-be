import { Router } from 'express';
import { studentsRoute } from './students.routes';
import { userRoute } from './user.routes';
const routes = Router();

routes.use('/users', userRoute);
routes.use('/students', studentsRoute);

export { routes };
