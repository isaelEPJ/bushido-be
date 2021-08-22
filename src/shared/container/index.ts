import { container } from 'tsyringe';
import { StudentRepository } from '../../repository/implementation/studentRepository';
import { UserRepository } from '../../repository/implementation/userRepository';
import { IStudentRepository } from '../../repository/iStudentRepository';
import { IUserRepository } from '../../repository/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentRepository,
);
