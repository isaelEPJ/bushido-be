import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

interface IStudentRepositoryDTO {
    name: string;
    email: string;
    cpf: string;
    imageUrl: string;
    graduation: string;
    age: number;
    timePratice: number;
    paymentDetail: number;
    details: string;
    lastGraduationDetail: string;
    phone: string;
    location_rua: string;
    location_cidade: string;
    location_estado: string;
    location_numero: string;
    location_cep: string;
    montlyPayment: boolean;
    isActivate: boolean;
    last_graduation_date: Date;
    payment_date: Date;
}

@injectable()
class UpdateStudentUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(
        id: string,
        {
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
        }: IStudentRepositoryDTO,
    ) {
        try {
            this.studentRepository.updateStudent(id, {
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
        } catch (err) {
            throw err;
        }
    }
}
export { UpdateStudentUserCase };
