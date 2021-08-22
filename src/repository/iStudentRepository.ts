import { Student } from '../entities/student';

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

interface IStudentRepository {
    create(istudentRepositoryDTO: IStudentRepositoryDTO): Promise<void>;
    findStudentById(cpf: string): Promise<Student>;
    findStudentByCpf(cpf: string): Promise<Student>;
    findStudentByName(name: string): Promise<Student>;
    findStudentByGraduation(graduation: string): Promise<Student[]>;
    listStudents(): Promise<Student[]>;
    listStudentsWithPayment(montlyPayment: boolean): Promise<Student[]>;
}
export { IStudentRepository, IStudentRepositoryDTO };
