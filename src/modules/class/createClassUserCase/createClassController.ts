import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateClassUserCase } from './createClassUserCase';

class CreateClassController {
    async build(request: Request, response: Response) {
        try {
            const {
                name,
                sensei_id,
                imageUrl,
                dojo,
                student_id,
                description,
                location_cidade,
                location_rua,
                location_numero,
                location_cep,
                location_estado,
            } = request.body;
            console.log(name, sensei_id, imageUrl);
            const createClassUserCase = container.resolve(CreateClassUserCase);
            await createClassUserCase.execute({
                name,
                sensei_id,
                imageUrl,
                dojo,
                student_id,
                description,
                location_cidade,
                location_rua,
                location_numero,
                location_cep,
                location_estado,
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}
export { CreateClassController };
