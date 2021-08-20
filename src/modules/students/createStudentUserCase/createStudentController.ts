import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStudentUserCase } from './createStudentUserCase';

class CreateStudentsController {
    async build(request: Request, response: Response) {
        try {
            const {
                name,
                email,
                cpf,
                imageUrl,
                graduation,
                age,
                timePratice,
                paymentDetail,
                details,
                lastGraduationDetail,
                montlyPayment,
            } = request.body;
            const createStudentUserCase = container.resolve(
                CreateStudentUserCase,
            );
            await createStudentUserCase.execute({
                name,
                email,
                cpf,
                imageUrl,
                graduation,
                age,
                timePratice,
                paymentDetail,
                details,
                lastGraduationDetail,
                montlyPayment,
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}
export { CreateStudentsController };
