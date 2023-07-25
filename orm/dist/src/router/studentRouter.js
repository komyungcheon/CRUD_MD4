"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controller/studentController"));
const studentRouter = (0, express_1.Router)();
studentRouter.get('/', studentController_1.default.findAll);
studentRouter.post('/', studentController_1.default.add);
studentRouter.put('/:id', studentController_1.default.update);
studentRouter.delete('/:id', studentController_1.default.delete);
studentRouter.get('/class/:id', studentController_1.default.getAllStudentOfClass);
studentRouter.get('/searchByName', studentController_1.default.findByName);
studentRouter.get('/searchByPoint', studentController_1.default.findByPoint);
studentRouter.get('/orderByPoint', studentController_1.default.orderStudentByPoint);
exports.default = studentRouter;
//# sourceMappingURL=studentRouter.js.map