import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClass1629632745143 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classes',
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
                        name: 'senseiId',
                        type: 'varchar',
                    },
                    {
                        name: 'imageUrl',
                        type: 'varchar',
                    },
                    {
                        name: 'dojo',
                        type: 'varchar',
                    },
                    {
                        name: 'studentsId',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'location_cidade',
                        type: 'varchar',
                    },
                    {
                        name: 'location_rua',
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
                        name: 'location_estado',
                        type: 'varchar',
                    },
                    {
                        name: 'isActivate',
                        type: 'boolean',
                    },
                    {
                        name: 'date_event',
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
        await queryRunner.dropTable('classes');
    }
}
