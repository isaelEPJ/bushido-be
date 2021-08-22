import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class RemoveStudentUserCase {
    constructor(
        @inject('StudentRepository') private studentRepository: StudentRepository,
    ) {}
    execute(id: string) {
        const studentToRemove = this.studentRepository.findStudentById(id);
        if (!studentToRemove) {
            throw 'Student no exists';
        }
        return this.studentRepository.delete(id);
    }
}
export { RemoveStudentUserCase };
