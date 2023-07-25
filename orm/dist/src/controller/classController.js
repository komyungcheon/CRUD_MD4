"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classService_1 = __importDefault(require("../service/classService"));
class ClassController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await classService_1.default.getAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let listProduct = await classService_1.default.add(req.body);
            res.json(listProduct);
        };
        this.delete = async (req, res) => {
            let result1 = await classService_1.default.delete(req.body.id);
            res.json(result1);
        };
        this.update = async (req, res) => {
            await classService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
    }
}
exports.default = new ClassController();
//# sourceMappingURL=classController.js.map