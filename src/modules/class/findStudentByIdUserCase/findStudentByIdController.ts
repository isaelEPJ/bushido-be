import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindStudentByIdUserCase } from './findStudentByIdUserCase';

class FindStudentsByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const findStudentByIdUserCase = container.resolve(
                FindStudentByIdUserCase,
            );

            const student = await findStudentByIdUserCase.execute(id);
            return response.json(student);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { FindStudentsByIdController };
