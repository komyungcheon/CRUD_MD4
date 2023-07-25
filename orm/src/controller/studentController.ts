import {Request, Response} from "express";
import studentService from "../service/studentService";
import classService from "../service/classService";

class StudentController {
    findAll = async (req: Request, res: Response) => {
        let data = await studentService.getAll();
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await studentService.save(req.body);
        res.json(data);
    }

    update = async (req: Request, res: Response) => {
        await studentService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
    delete = async (req: Request, res: Response) => {
        await studentService.delete(req.params.id);
        res.json('Xóa thành công')
    }

    getAllStudentOfClass = async (req:Request, res:Response) => {
        let data = await studentService.getStudentOfClass(req.params.id);
        res.json(data);
    }

    findByName = async (req: Request, res: Response) => {
        console.log(req.query.name)
         let data = await studentService.findByName(req.query.name);
        res.json(data);
    }

    findByPoint = async (req: Request, res: Response) => {
        let {point1, point2} = req.query;
        let data = await studentService.findByPoint(point1, point2);
        res.json(data);
    }

    orderStudentByPoint = async (req: Request, res: Response) => {
        let data = await studentService.orderByPoint();
        res.json(data);
    }
}

export default new StudentController();
