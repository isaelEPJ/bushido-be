import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindStudentGraduationUserCase } from './findStudentGraduationUserCase';

class FindStudentsByGraduationController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { graduation } = request.params;

            const findStudentGraduationUserCase = container.resolve(
                FindStudentGraduationUserCase,
            );

            const student = await findStudentGraduationUserCase.execute(graduation);
            return response.json(student);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { FindStudentsByGraduationController };
