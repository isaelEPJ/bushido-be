import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../repository/implementation/userRepository';

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
