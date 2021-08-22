import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListStudentsByPaymentUserCase } from './listStudentsByPaymentUserCase';

class ListStudentsByPaymentController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { payment } = request.params;

            const listStudentsByPaymentUserCase = container.resolve(
                ListStudentsByPaymentUserCase,
            );

            const students = await listStudentsByPaymentUserCase.execute(
                payment,
            );
            return response.json(students);
        } catch (err) {
            return response.json(err);
        }
    }
}
export { ListStudentsByPaymentController };
