import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateuserUserCase } from './updateuserUserCase';

class UpdateUserController {
    async build(request: Request, response: Response) {
        try {
            const {
                id,
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
            const updateUserUserCase = container.resolve(UpdateuserUserCase);
            await updateUserUserCase.execute(id, {
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
            return response.status(401).json(err);
        }
    }
}
export { UpdateUserController };
