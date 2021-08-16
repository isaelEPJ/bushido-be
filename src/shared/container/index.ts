import { container } from 'tsyringe';
import { UserRepository } from '../../repository/implementation/userRepository';
import { IUserRepository } from '../../repository/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
