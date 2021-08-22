import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListClassUserCase } from './listClassUSerCase';

class ListClassController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listClassUserCase = container.resolve(ListClassUserCase);

            const classes = await listClassUserCase.execute();
            return response.json(classes);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { ListClassController };
