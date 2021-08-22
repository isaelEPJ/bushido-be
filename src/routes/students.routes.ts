import { Router } from 'express';
import { CreateStudentsController } from '../modules/students/createStudentUserCase/createStudentController';
import { FindStudentsByIdController } from '../modules/students/findStudentByIdUserCase/findStudentByIdController';
import { FindStudentsByGraduationController } from '../modules/students/findStudentGraduationUserCase/findStudentGraduationController';
import { FindStudentsByCpfController } from '../modules/students/findStudentsByCpfUSerCase/findStudentsByCpfController';
import { ListStudentsByPaymentController } from '../modules/students/listStudentsByPaymentUserCase/listStudentsByPaymentController';
import { ListStudentsController } from '../modules/students/listStudentsUSerCase/listStudentsController';
import { RemoveStudentController } from '../modules/students/removeStudentUserCase/removeStudentController';
import { UpdateStudentController } from '../modules/students/updateStudentUserCase/updateStudentController';

const studentsRoute = Router();
const createStudentsController = new CreateStudentsController();
const listStudentsController = new ListStudentsController();
const findStudentsByCpfController = new FindStudentsByCpfController();
const findStudentByIdController = new FindStudentsByIdController();
const findStudentByGraduation = new FindStudentsByGraduationController();
const listStudentsByPaymentController = new ListStudentsByPaymentController();
const updateStudentController = new UpdateStudentController();
const removeStudentController = new RemoveStudentController();

studentsRoute.get('/', listStudentsController.handle);
studentsRoute.get('/cpf/:cpf', findStudentsByCpfController.handle);
studentsRoute.get('/id/:id', findStudentByIdController.handle);
studentsRoute.get('/faixa/:graduation', findStudentByGraduation.handle);
studentsRoute.post('/payment/:payment', listStudentsByPaymentController.handle);
studentsRoute.post('/create', createStudentsController.build);
studentsRoute.put('/update', updateStudentController.build);
studentsRoute.delete('/delete/:id', removeStudentController.build);

export { studentsRoute };
