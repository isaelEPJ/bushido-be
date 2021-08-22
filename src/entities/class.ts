import { v4 as uuidv4 } from 'uuid';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classes')
class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    sensei_id: string;
    @Column()
    imageUrl: string;
    @Column()
    dojo: string;
    @Column()
    student_id: string;
    @Column()
    description: string;
    @Column()
    location_cidade: string;
    @Column()
    location_rua: string;
    @Column()
    location_numero: string;
    @Column()
    location_cep: string;
    @Column()
    location_estado: string;
    @Column()
    isActivate: boolean;
    @Column('timestamp with time zone')
    date_event: Date;
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

export { Class };
