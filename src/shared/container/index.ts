import { container } from 'tsyringe';
import { IClassRepository } from '../../repository/IClassRepository';
import { ClassRepository } from '../../repository/implementation/classRepository';
import { StudentRepository } from '../../repository/implementation/studentRepository';
import { UserRepository } from '../../repository/implementation/userRepository';
import { IStudentRepository } from '../../repository/iStudentRepository';
import { IUserRepository } from '../../repository/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentRepository,
);
container.registerSingleton<IClassRepository>(
    'ClassRepository',
    ClassRepository,
);
