import { inject, injectable } from 'tsyringe';
import { StudentRepository } from '../../../repository/implementation/studentRepository';

@injectable()
class ListStudentsByPaymentUserCase {
    constructor(
        @inject('StudentRepository')
        private studentRepository: StudentRepository,
    ) {}
    execute(payment: string) {
        try {
            let paymentValue = false;
            if (payment == 'true') {
                paymentValue = true;
            }
            if (payment == 'false') {
                paymentValue = false;
            }
            return this.studentRepository.listStudentsWithPayment(paymentValue);
        } catch (err) {
            throw err;
        }
    }
}
export { ListStudentsByPaymentUserCase };
