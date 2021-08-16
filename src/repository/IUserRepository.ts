import { User } from '../entities/user';

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

interface IUserRepository {
    create(iUserRepositoryDTO: IUserRepositoryDTO): void;
    listUsers(): Promise<User[] | null>;
    findUserById(id: string): Promise<User | null>;
    loginByUser(email: string, password: string): Promise<User>;
    findUserByCPF(cpf: string): Promise<User | null>;
    findUserByName(name: string): Promise<User | null>;
}

export { IUserRepositoryDTO, IUserRepository };
