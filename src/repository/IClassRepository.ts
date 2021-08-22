import { Class } from '../entities/class';
import { Student } from '../entities/student';

interface IClassRepositoryDTO {
    name: string;
    sensei: string;
    imageUrl: string;
    dojo: string;
    studentsId: string[];
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
    findClassByManyIds(ids: string[]): Promise<Student[]>;
    findClassByCPF(cpf: string): Promise<Class | null>;
    findClassByName(name: string): Promise<Class | null>;
}

export { IClassRepositoryDTO, IClassRepository };
