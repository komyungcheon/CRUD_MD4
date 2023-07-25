import { Student } from "../entity/student";
declare class StudentService {
    private repository;
    getAll: () => Promise<Student[]>;
    save: (data: any) => Promise<any>;
    findById: (data: any) => Promise<Student>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    getStudentOfClass: (idClass: any) => Promise<Student[]>;
    findByName: (nameFind: any) => Promise<Student[]>;
    findByPoint: (point1: any, point2: any) => Promise<Student[]>;
    orderByPoint: () => Promise<Student[]>;
}
declare const _default: StudentService;
export default _default;
