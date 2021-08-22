import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

interface IStudentitoryDTO {
    name: string;
    cpf: string;
    graduation: string;
}

@injectable()
class ListStudentsUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute() {
        return this.studentRepository.listStudents();
    }
}
export { ListStudentsUserCase };
