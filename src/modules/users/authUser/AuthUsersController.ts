import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthUsersUserCase } from './AuthUsersUserCase';
class AuthUsersController {
    async build(request: Request, response: Response) {
        try {
            const { email, password } = request.body;

            const authUsersUserCase = container.resolve(AuthUsersUserCase);

            const userAuthed = await authUsersUserCase.execute(email, password);

            return response.status(201).json(userAuthed);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { AuthUsersController };
