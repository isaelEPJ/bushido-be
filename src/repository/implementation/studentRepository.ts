import { Repository, getRepository } from 'typeorm';
import { Student } from '../../entities/student';
import {
    IStudentRepository,
    IStudentRepositoryDTO,
} from '../iStudentRepository';

class StudentRepository implements IStudentRepository {
    private repository: Repository<Student>;

    constructor() {
        this.repository = getRepository(Student);
    }

    async create({
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
        last_graduation_date,
        payment_date,
    }: IStudentRepositoryDTO): Promise<void> {
        try {
            const student = this.repository.create({
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
                last_graduation_date,
                payment_date,
            });
            await this.repository.save(student);
        } catch (error) {
            throw error.error;
        }
        throw new Error('Method not implemented.');
    }
    findStudentByCpf(cpf: string): Promise<Student> {
        throw new Error('Method not implemented.');
    }
    findStudentByName(name: string): Promise<Student> {
        throw new Error('Method not implemented.');
    }
    findStudentByGraduation(graduation: string): Promise<Student[]> {
        throw new Error('Method not implemented.');
    }
    listStudents(): Promise<Student[]> {
        throw new Error('Method not implemented.');
    }
    listStudentsWithPayment(): Promise<Student[]> {
        throw new Error('Method not implemented.');
    }
}
export { StudentRepository };
