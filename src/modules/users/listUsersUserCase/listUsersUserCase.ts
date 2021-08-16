import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../repository/implementation/userRepository';

interface IUserRepositoryDTO {
    name: string;
    imageUrl: string;
    email: string;
    password: string;
    codename: string;
    cpf: string;
    graduation: string;
    description: string;
    isAdmin: boolean;
    isActivate: boolean;
}
@injectable()
class ListUsersUserCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository,
    ) {}
    execute() {
        return this.userRepository.listUsers();
    }
}
export { ListUsersUserCase };
