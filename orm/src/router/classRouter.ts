import {Router} from "express";
import classController from "../controller/classController";

const classRouter = Router();
//API CRUD lớp:
classRouter.get('/', classController.findAll);
classRouter.post('/', classController.add);
classRouter.delete('/:id', classController.delete);
classRouter.put('/:id', classController.update);

export default classRouter;
