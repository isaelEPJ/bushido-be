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
    isSensei: boolean;
}

@injectable()
class UpdateuserUserCase {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
    ) {}
    execute(
        id: string,
        {
            name,
            imageUrl,
            email,
            password,
            codename,
            cpf,
            graduation,
            description,
            isAdmin,
            isActivate,
            isSensei,
        }: IUserRepositoryDTO,
    ) {
        try {
            this.userRepository.updateUser(id, {
                name,
                imageUrl,
                email,
                password,
                codename,
                cpf,
                graduation,
                description,
                isAdmin,
                isActivate,
                isSensei,
            });
        } catch (err) {
            throw err;
        }
    }
}
export { UpdateuserUserCase };
