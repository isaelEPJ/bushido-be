import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RemoveStudentUserCase } from './removeUserUserCase';

class RemoveStudentController {
    async build(request: Request, response: Response) {
        try {
            // const { id } = request.headers;
            const removeStudentUserCase = container.resolve(
                RemoveStudentUserCase,
            );
            const { id } = request.params;
            await removeStudentUserCase.execute(id);
            return response.status(201).send();
        } catch (err) {
            return response.status(402);
        }
    }
}

export { RemoveStudentController };
