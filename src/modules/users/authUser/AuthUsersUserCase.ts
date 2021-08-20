import { inject, injectable } from 'tsyringe';
import { User } from '../../../entities/user';
import { UserRepository } from '../../../repository/implementation/userRepository';

@injectable()
class AuthUsersUserCase {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
    ) {}
    async execute(email: string, password: string): Promise<User> {
        try {
            const authUser = await this.userRepository.loginByUser(
                email,
                password,
            );
            if (!authUser) {
                throw new Error('Email or Password incorrects');
            }
            if (authUser == null) {
                throw new Error('User not found, try again.');
            }
            if (authUser.email != email || authUser.password != password) {
                throw new Error('Email or Password incorrects');
            }
            return authUser;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export { AuthUsersUserCase };
