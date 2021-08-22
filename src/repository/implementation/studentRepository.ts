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

    async delete(id: string): Promise<void> {
        try {
            await this.repository.delete({ id });
        } catch (err) {
            throw err;
        }
    }
    async updateStudent(
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
    ): Promise<void> {
        const studentToUpdate = this.findStudentById(id);
        if (!studentToUpdate) {
            throw 'Student Not Found';
        }
        await this.repository.update(
            { id },
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
            },
        );
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
            await this.repository.save(student);
        } catch (error) {
            throw error;
        }
    }
    async listStudents(): Promise<Student[]> {
        const allUsers = await this.repository.find();
        if (!allUsers) {
            throw 'Users not found';
        }
        return allUsers;
    }
    async findStudentById(id: string): Promise<Student> {
        const userById = await this.repository.findOne({ id });
        if (!userById) {
            throw 'User not found';
        }
        return userById;
    }
    async findStudentByCpf(cpf: string): Promise<Student> {
        const userByCpf = await this.repository.findOne({ cpf });
        if (!userByCpf) {
            throw 'User not found';
        }
        return userByCpf;
    }

    async findStudentByName(name: string): Promise<Student> {
        const userByName = await this.repository.findOne({
            name,
        });
        if (!userByName) {
            throw 'User not found';
        }
        return userByName;
    }
    async findStudentByGraduation(graduation: string): Promise<Student[]> {
        const usersByGraduation = await this.repository.find({
            graduation,
        });
        if (!usersByGraduation) {
            throw 'Users With this graduation no exists';
        }
        return usersByGraduation;
    }

    async listStudentsWithPayment(montlyPayment: boolean): Promise<Student[]> {
        if (montlyPayment === false) {
            const usersByPaymentFalse = await this.repository.find({
                montlyPayment: false,
            });
            return usersByPaymentFalse;
        }
        if (montlyPayment === true) {
            const usersByPaymentTrue = await this.repository.find({
                montlyPayment: true,
            });
            return usersByPaymentTrue;
        }
        throw 'Users not found';
    }
}
export { StudentRepository };
