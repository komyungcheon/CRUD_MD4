import {Router} from "express";

import studentController from "../controller/studentController";
import classController from "../controller/classController";
import classRouter from "./classRouter";

const studentRouter = Router();
//API CRUD sinh viên:
studentRouter.get('/', studentController.findAll);
studentRouter.post('/', studentController.add);
studentRouter.put('/:id', studentController.update);
studentRouter.delete('/:id', studentController.delete);

//API xem danh sách sinh viên 1 lớp:
studentRouter.get('/class/:id', studentController.getAllStudentOfClass)
//API tìm kiếm sinh viên theo tên gần đúng:
studentRouter.get('/searchByName',studentController.findByName);
//API tìm kiếm gần đúng theo khoảng điểm của các sinh viên:
studentRouter.get('/searchByPoint',studentController.findByPoint);
//API sắp xếp danh sách sinh viên theo điểm (giảm dần):
studentRouter.get('/orderByPoint',studentController.orderStudentByPoint);
export default studentRouter;
