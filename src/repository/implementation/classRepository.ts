import { getRepository, Repository } from 'typeorm';
import { Class } from '../../entities/class';
import { IClassRepository, IClassRepositoryDTO } from '../IClassRepository';

class ClassRepository implements IClassRepository {
    private repository: Repository<Class>;

    constructor() {
        this.repository = getRepository(Class);
    }
    findUserSensei(isSensei: boolean): Promise<Class[]> {
        throw new Error('Method not implemented.');
    }

    async create({
        name,
        sensei_id,
        imageUrl,
        dojo,
        student_id,
        description,
        location_cidade,
        location_rua,
        location_numero,
        location_cep,
        location_estado,
        isActivate,
        date_event,
    }: IClassRepositoryDTO): Promise<void> {
        try {
            const classes = this.repository.create({
                name,
                sensei_id,
                imageUrl,
                dojo,
                student_id,
                description,
                location_cidade,
                location_rua,
                location_numero,
                location_cep,
                location_estado,
                isActivate,
                date_event,
            });

            await this.repository.save(classes);
        } catch (err) {
            throw err;
        }
    }
    async listClasses(): Promise<Class[]> {
        try {
            const allClasses = await this.repository.find();
            if (!allClasses) {
                throw 'Classes no exists';
            }
            return allClasses;
        } catch (error) {
            throw 'Classes not found';
        }
    }
    async findClassById(id: string): Promise<Class> {
        try {
            const classesById = await this.repository.findOne('id');
            if (!classesById) {
                throw 'Classes no exists';
            }
            return classesById;
        } catch (error) {
            throw 'Classes not found';
        }
    }
    async findClassBySensei(sensei_id: string): Promise<Class> {
        try {
            const senseiById = await this.repository.findOne(sensei_id);
            if (!senseiById) {
                throw 'Classes no exists';
            }
            return senseiById;
        } catch (error) {
            throw 'Classes not found';
        }
    }
    async findClassByManyIds(ids: string[]): Promise<Class[]> {
        try {
            //    ids.map(async (id) => {
            //         const allClasses = await this.repository.find({
            //             id,
            //         });
            //         if (!allClasses) {
            //             throw 'Classes no exists';
            //         }
            //         return allClasses;
            //     });
            throw 'Classes not found';
        } catch (error) {
            throw 'Classes not found';
        }
    }

    async findClassByName(name: string): Promise<Class[]> {
        try {
            const classByName = await this.repository.find({ name });
            if (!classByName) {
                throw 'Classes no exists';
            }
            return classByName;
        } catch (error) {
            throw 'Classes not found';
        }
    }
}

export { ClassRepository };
