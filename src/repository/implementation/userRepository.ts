import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/user';
import { IUserRepository, IUserRepositoryDTO } from '../IUserRepository';

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    // private static INSTANCE: UserRepository;

    constructor() {
        this.repository = getRepository(User);
    }

    // public static getInstance(): UserRepository {
    //     if (!UserRepository.INSTANCE) {
    //         UserRepository.INSTANCE = new UserRepository();
    //     }
    //     return UserRepository.INSTANCE;
    // }
    async create({
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
    }: IUserRepositoryDTO): Promise<void> {
        try {
            const user = this.repository.create({
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
            });

            await this.repository.save(user);
        } catch (err) {
            throw new Error(err);
        }
    }
    async delete(id: string): Promise<void> {
        try {
            await this.repository.delete({ id });
        } catch (err) {
            throw err;
        }
    }
    async updateUser(
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
        }: IUserRepositoryDTO,
    ): Promise<void> {
        const userToUpdate = this.findUserById(id);
        if (!userToUpdate) {
            throw 'User Not Found';
        }
        await this.repository.update(
            { id },
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
            },
        );
    }
    async listUsers(): Promise<User[] | null> {
        try {
            const users = await this.repository.find();
            if (!users) {
                return null;
            }
            return users;
        } catch (err) {
            throw new Error(err);
        }
    }
    async findUserByName(name: string): Promise<User | null> {
        const userByName = await this.repository.findOne({ name });
        if (userByName) {
            return userByName;
        }
        return null;
    }
    async findUserByCPF(cpf: string): Promise<User | null> {
        const userByCPF = await this.repository.findOne({ cpf });
        if (userByCPF) {
            return userByCPF;
        }

        return null;
    }
    async findUserById(id: string): Promise<User | null> {
        const userById = await this.repository.findOne({ id });
        if (!userById) {
            return null;
        }
        return userById;
    }
    async loginByUser(email: string, password: string): Promise<User> {
        try {
            // const userLogin = await this.repository.findOne({
            //     email: email,
            //     password: password,
            // });
            const userLogin = await this.repository.findOne({
                email,
                password,
            });
            if (!userLogin) {
                throw 'Email or Password incorrects';
            }
            // if (userLogin) {
            //     const a = sessionStorage.setItem(
            //         'currentUser',
            //         JSON.stringify(userLogin),
            //     );
            //     console.log(typeof a);
            //     return 'a';
            // }
            // console.log(userLogin);
            return userLogin;
        } catch (err) {
            throw err;
        }
    }
}

export { UserRepository };
