import { v4 as uuidv4 } from 'uuid';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    imageUrl: string;
    @Column()
    email: string;
    @Column()
    codename: string;
    @Column()
    password: string;
    @Column()
    cpf: string;
    @Column()
    graduation: string;
    @Column()
    description: string;
    @Column()
    isAdmin: boolean;
    @Column()
    isActivate: boolean;
    @Column('timestamp with time zone')
    altered_at: Date;
    @Column('timestamp with time zone')
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };
