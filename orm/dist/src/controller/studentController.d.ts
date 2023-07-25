import { Request, Response } from "express";
declare class StudentController {
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getAllStudentOfClass: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    findByPoint: (req: Request, res: Response) => Promise<void>;
    orderStudentByPoint: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
