import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateStudentUserCase } from './updateStudentUserCase';

class UpdateStudentController {
    build(request: Request, response: Response) {
        try {
            const {
                id,
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
                phone,
                location_rua,
                location_cidade,
                location_estado,
                location_numero,
                location_cep,
                montlyPayment,
                isActivate,
                last_graduation_date,
                payment_date,
            } = request.body;
            const updateStudentUserCase = container.resolve(
                UpdateStudentUserCase,
            );
            updateStudentUserCase.execute(id, {
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
                phone,
                location_rua,
                location_cidade,
                location_estado,
                location_numero,
                location_cep,
                montlyPayment,
                isActivate,
                last_graduation_date,
                payment_date,
            });
            return response.status(201).send();
        } catch (err) {
            return response.status(401).json(err);
        }
    }
}
export { UpdateStudentController };
