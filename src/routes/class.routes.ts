import { Router } from 'express';
import { CreateClassController } from '../modules/class/createClassUserCase/createClassController';
import { ListClassController } from '../modules/class/listClassUSerCase/listClassController';

const classRoute = Router();
const createClassController = new CreateClassController();
const listclassController = new ListClassController();

classRoute.get('/', listclassController.handle);
classRoute.post('/create', createClassController.build);

export { classRoute };
