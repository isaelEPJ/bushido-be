import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../repository/implementation/userRepository';

@injectable()
class ListUsersUserCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository,
    ) {}
    async execute() {
        const allUsers = await this.userRepository.listUsers();
        return allUsers;
    }
}
export { ListUsersUserCase };
