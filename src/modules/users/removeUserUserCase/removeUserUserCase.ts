import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../repository/implementation/userRepository';

@injectable()
class RemoveUserUserCase {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
    ) {}
    async execute(id: string) {
        const userToRemove = await this.userRepository.findUserById(id);
        if (!userToRemove) {
            throw 'User no exists';
        }
        return this.userRepository.delete(id);
    }
}
export { RemoveUserUserCase };
