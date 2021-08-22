import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createStudentsTable1629422072895 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        default: 'uuid_generate_v4()',
                        generationStrategy: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                    },
                    {
                        name: 'imageUrl',
                        type: 'varchar',
                    },
                    {
                        name: 'graduation',
                        type: 'varchar',
                    },
                    {
                        name: 'age',
                        type: 'varchar',
                    },
                    {
                        name: 'timePratice',
                        type: 'varchar',
                    },
                    {
                        name: 'paymentDetail',
                        type: 'varchar',
                    },
                    {
                        name: 'details',
                        type: 'varchar',
                    },
                    {
                        name: 'lastGraduationDetail',
                        type: 'varchar',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'location_rua',
                        type: 'varchar',
                    },
                    {
                        name: 'location_cidade',
                        type: 'varchar',
                    },
                    {
                        name: 'location_estado',
                        type: 'varchar',
                    },
                    {
                        name: 'location_numero',
                        type: 'varchar',
                    },
                    {
                        name: 'location_cep',
                        type: 'varchar',
                    },
                    {
                        name: 'montlyPayment',
                        type: 'boolean',
                    },
                    {
                        name: 'isActivate',
                        type: 'boolean',
                    },
                    {
                        name: 'last_graduation_date',
                        type: 'Timestamp',
                    },
                    {
                        name: 'payment_date',
                        type: 'Timestamp',
                    },
                    {
                        name: 'altered_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students');
    }
}
