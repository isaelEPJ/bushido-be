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
class CreateUsersUserCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository,
    ) {}
    async execute({
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
    }: IUserRepositoryDTO): Promise<void> {
        const CpfuserAlreadyExists = await this.userRepository.findUserByCPF(
            cpf,
        );
        const NameUserAlreadyExists = await this.userRepository.findUserByName(
            name,
        );
        if (CpfuserAlreadyExists) {
            throw 'CPF Already exists';
        }
        if (NameUserAlreadyExists) {
            throw 'Name Already exists';
        }
        try {
            email = email.toLowerCase().replace(' ', '').trim();

            if (password.length >= 5) {
                password = password.trim();
            } else {
                throw 'password must contain at least 5 characters';
            }
            if (cpf.length >= 8 || cpf.length <= 11) {
                cpf = cpf
                    .replace('.', '')
                    .replace('.', '')
                    .replace('-', '')
                    .trim();
            } else {
                throw 'CPF incorrect';
            }
            isActivate = true;
            isAdmin = true;
            this.userRepository.create({
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
export { CreateUsersUserCase };
