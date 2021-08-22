import { Router } from 'express';
import { classRoute } from './class.routes';
import { studentsRoute } from './students.routes';
import { userRoute } from './user.routes';
const routes = Router();

routes.use('/users', userRoute);
routes.use('/students', studentsRoute);
routes.use('/class', classRoute);

export { routes };
