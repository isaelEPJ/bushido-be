import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListStudentsUserCase } from './listStudentsUserCase';

class ListStudentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listStudentsUserCase =
                container.resolve(ListStudentsUserCase);

            const students = await listStudentsUserCase.execute();
            return response.json(students);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { ListStudentsController };
