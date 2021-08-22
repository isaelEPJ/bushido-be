import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindStudentsByCpfUserCase } from './findStudentsByCpfUSerCase';

class FindStudentsByCpfController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { cpf } = request.params;

            const findStudentsByCpfUserCase =
                container.resolve(FindStudentsByCpfUserCase);

            const student = await findStudentsByCpfUserCase.execute(cpf);
            return response.json(student);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { FindStudentsByCpfController };
