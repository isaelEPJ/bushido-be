import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class FindStudentByIdUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(id: string) {
        try {
            return this.studentRepository.findStudentById(id);
        } catch (err) {
            throw err;
        }
    }
}
export { FindStudentByIdUserCase };
