import { Class } from '../entities/class';

interface IClassRepositoryDTO {
    name: string;
    sensei_id: string;
    imageUrl: string;
    dojo: string;
    student_id: string;
    description: string;
    location_cidade: string;
    location_rua: string;
    location_numero: string;
    location_cep: string;
    location_estado: string;
    isActivate: boolean;
    date_event: Date;
}

interface IClassRepository {
    create(iClassRepositoryDTO: IClassRepositoryDTO): void;
    listClasses(): Promise<Class[]>;
    findClassById(id: string): Promise<Class>;
    findClassBySensei(id: string): Promise<Class>;
    findClassByManyIds(ids: string[]): Promise<Class[]>;
    findClassByName(name: string): Promise<Class[]>;
    findUserSensei(isSensei: boolean): Promise<Class[]>;
}

export { IClassRepositoryDTO, IClassRepository };
