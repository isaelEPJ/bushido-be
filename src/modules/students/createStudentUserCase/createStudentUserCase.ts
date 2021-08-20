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
    montlyPayment: boolean;
}

@injectable()
class CreateStudentUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    async execute({
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
    }: IStudentRepositoryDTO) {
        // const CpfuserAlreadyExists = await this.userRepository.findUserByCPF(
        //     cpf,
        // );
        // const NameUserAlreadyExists = await this.userRepository.findUserByName(
        //     name,
        // );
        // if (CpfuserAlreadyExists) {
        //     throw 'CPF Already exists';
        // }
        // if (NameUserAlreadyExists) {
        //     throw 'Name Already exists';
        // }

        try {
            email = email.toLowerCase().replace(' ', '').trim();

            if (cpf.length >= 8 || cpf.length <= 11) {
                cpf = cpf
                    .replace('.', '')
                    .replace('.', '')
                    .replace('-', '')
                    .trim();
            } else {
                throw 'CPF incorrect';
            }
            const datetime = new Date(2020);
            const isActivate = true;

            await this.studentRepository.create({
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
                isActivate,
                last_graduation_date: datetime,
                payment_date: datetime,
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}
export { CreateStudentUserCase };
