import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersUserCase } from './listUsersUserCase';

class ListUsersController {
    // constructor(private listUsersUserCase: ListUsersUserCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listUsersUserCase = container.resolve(ListUsersUserCase);

            const users = await listUsersUserCase.execute();
            return response.json(users);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { ListUsersController };
