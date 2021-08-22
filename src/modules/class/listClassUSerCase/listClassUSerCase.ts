import { inject, injectable } from 'tsyringe';
import { ClassRepository } from '../../../repository/implementation/classRepository';

@injectable()
class ListClassUserCase {
    constructor(
        @inject('ClassRepository')
        private classRepository: ClassRepository,
    ) {}
    execute() {
        return this.classRepository.listClasses();
    }
}
export { ListClassUserCase };
