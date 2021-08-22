import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUsersUserCase } from './createUsersUserCase';
class CreateUsersController {
    // constructor(private usersUserCase: CreateUsersUserCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
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
            } = request.body;
            const createCategoryUserCase =
                container.resolve(CreateUsersUserCase);
            await createCategoryUserCase.execute({
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
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json(err);
        }
    }
}
export { CreateUsersController };
