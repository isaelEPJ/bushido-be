import { Router } from 'express';
import { CreateStudentsController } from '../modules/students/createStudentUserCase/createStudentController';

const studentsRoute = Router();
const createStudentsController = new CreateStudentsController();

studentsRoute.post('/create', createStudentsController.build);

export { studentsRoute };
