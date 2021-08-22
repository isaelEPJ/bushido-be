import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class FindStudentsByCpfUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(cpf: string) {
        try {
            if (cpf.length < 8 || cpf.length > 15) {
                throw 'CPF inválido';
            }
            return this.studentRepository.findStudentByCpf(cpf);
        } catch (err) {
            throw err;
        }
    }
}
export { FindStudentsByCpfUserCase };
