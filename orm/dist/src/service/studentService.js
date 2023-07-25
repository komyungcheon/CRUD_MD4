"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const student_1 = require("../entity/student");
const typeorm_1 = require("typeorm");
class StudentService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(student_1.Student);
        this.getAll = async () => {
            return await this.repository.find({
                relations: {
                    class: true
                }
            });
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.findById = async (data) => {
            return await this.repository.findOne({ where: { id: data } });
        };
        this.delete = async (data) => {
            return await this.repository.delete(data);
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.getStudentOfClass = async (idClass) => {
            return await this.repository.find({
                relations: {
                    class: true
                },
                where: {
                    class: {
                        id: idClass
                    }
                }
            });
        };
        this.findByName = async (nameFind) => {
            return await this.repository.find({
                relations: {
                    class: true
                },
                where: { name: (0, typeorm_1.Like)(`%${nameFind}%`) }
            });
        };
        this.findByPoint = async (point1, point2) => {
            return await this.repository.find({
                relations: {
                    class: true
                },
                where: {
                    point: (0, typeorm_1.Between)(point1, point2)
                }
            });
        };
        this.orderByPoint = async () => {
            return await this.repository.find({
                relations: {
                    class: true
                },
                order: {
                    point: "DESC"
                }
            });
        };
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map