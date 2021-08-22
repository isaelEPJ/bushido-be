import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class FindStudentByNameUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(name: string) {
        try {
            return this.studentRepository.findStudentByName(name);
        } catch (err) {
            throw err;
        }
    }
}
export { FindStudentByNameUserCase };
