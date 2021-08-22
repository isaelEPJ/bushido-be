import { inject, injectable } from 'tsyringe';
import { ClassRepository } from '../../../repository/implementation/classRepository';

interface IClassRepositoryDTO {
    name: string;
    sensei_id: string;
    imageUrl: string;
    dojo: string;
    student_id: string;
    description: string;
    location_cidade: string;
    location_rua: string;
    location_numero: string;
    location_cep: string;
    location_estado: string;
}

@injectable()
class CreateClassUserCase {
    constructor(
        @inject('ClassRepository')
        private classRepository: ClassRepository,
    ) {}
    async execute({
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
    }: IClassRepositoryDTO) {
        try {
            const datetime = new Date(2020);
            const isActivate = true;
            // const name = 'name teste';
            await this.classRepository.create({
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
                isActivate: true,
                date_event: datetime,
            });
        } catch (err) {
            throw err;
        }
    }
}
export { CreateClassUserCase };
