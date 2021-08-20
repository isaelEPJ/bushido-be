import { v4 as uuidv4 } from 'uuid';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    cpf: string;
    @Column()
    imageUrl: string;
    @Column()
    age: number;
    @Column()
    timePratice: number;
    @Column()
    graduation: string;
    @Column()
    paymentDetail: number;
    @Column()
    details: string;
    @Column()
    lastGraduationDetail: string;
    @Column()
    montlyPayment: boolean;
    @Column()
    isActivate: boolean;
    @Column()
    last_graduation_date: Date;
    @Column()
    payment_date: Date;
    @Column('timestamp with time zone')
    altere_at: Date;
    @Column('timestamp with time zone')
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Student };
