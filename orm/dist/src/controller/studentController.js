"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await studentService_1.default.getAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await studentService_1.default.save(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            await studentService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.delete = async (req, res) => {
            await studentService_1.default.delete(req.params.id);
            res.json('Xóa thành công');
        };
        this.getAllStudentOfClass = async (req, res) => {
            let data = await studentService_1.default.getStudentOfClass(req.params.id);
            res.json(data);
        };
        this.findByName = async (req, res) => {
            console.log(req.query.name);
            let data = await studentService_1.default.findByName(req.query.name);
            res.json(data);
        };
        this.findByPoint = async (req, res) => {
            let { point1, point2 } = req.query;
            let data = await studentService_1.default.findByPoint(point1, point2);
            res.json(data);
        };
        this.orderStudentByPoint = async (req, res) => {
            let data = await studentService_1.default.orderByPoint();
            res.json(data);
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map