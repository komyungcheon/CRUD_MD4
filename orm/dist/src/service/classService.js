"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../entity/class");
const data_source_1 = require("../data-source");
class ClassService {
    constructor() {
        this.getAll = async () => {
            let result = await this.classRepository.find({
                relations: {
                    students: true
                }
            });
            return result;
        };
        this.add = async (product) => {
            let result = await this.classRepository.save(product);
            return result;
        };
        this.delete = async (id) => {
            let result = await this.classRepository.delete(id);
            return result;
        };
        this.update = async (id, data) => {
            return await this.classRepository.update(id, data);
        };
        this.classRepository = data_source_1.AppDataSource.getRepository(class_1.Class);
    }
}
exports.default = new ClassService();
//# sourceMappingURL=classService.js.map