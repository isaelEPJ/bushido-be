import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RemoveUserUserCase } from './removeUserUserCase';

class RemoveUserController {
    async build(request: Request, response: Response) {
        try {
            const removeUserUserCase = container.resolve(RemoveUserUserCase);
            const { id } = request.body;
            await removeUserUserCase.execute(id);
            return response.status(201).send();
        } catch (err) {
            return response.status(402);
        }
    }
}

export { RemoveUserController };
