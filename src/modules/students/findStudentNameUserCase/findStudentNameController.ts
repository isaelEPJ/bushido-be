import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindStudentByNameUserCase } from './findStudentNameUserCase';

class FindStudentsByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name } = request.params;

            const findStudentByNameUserCase = container.resolve(
                FindStudentByNameUserCase,
            );

            const student = await findStudentByNameUserCase.execute(name);
            return response.json(student);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { FindStudentsByNameController };
