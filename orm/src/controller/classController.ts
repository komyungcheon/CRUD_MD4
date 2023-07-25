import {Request, Response} from "express";
import classService from "../service/classService";

class ClassController {

    findAll = async (req: Request, res: Response) => {
        let listProduct = await classService.getAll();
        res.json(listProduct);
    }

    add = async (req: Request, res: Response) => {
        let listProduct = await classService.add(req.body);
        res.json(listProduct);
    }

    delete = async (req: Request, res: Response) => {
        let result1 = await classService.delete(req.body.id);
        res.json(result1);
    }


    update = async (req: Request, res: Response) => {
        await classService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
}

export default new ClassController();
