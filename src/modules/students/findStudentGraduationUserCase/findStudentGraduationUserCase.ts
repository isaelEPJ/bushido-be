import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class FindStudentGraduationUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(graduation: string) {
        try {
            return this.studentRepository.findStudentByGraduation(graduation);
        } catch (err) {
            throw err;
        }
    }
}
export { FindStudentGraduationUserCase };
