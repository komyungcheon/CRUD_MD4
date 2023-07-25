import {AppDataSource} from "../data-source";
import {Student} from "../entity/student";
import {Like, Between} from "typeorm";

class StudentService {
    private repository = AppDataSource.getRepository(Student);

    getAll = async () => {
        return await this.repository.find({
            relations : {
                class : true
            }
        });
    }

    save = async (data) => {
        return await this.repository.save(data)
    }

    findById = async (data) => {
        return await this.repository.findOne({where: {id: data}});
    }

    delete  = async (data) => {
        return await this.repository.delete(data)
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

    getStudentOfClass = async (idClass) => {
        return await this.repository.find({
            relations : {
                class : true
            },
            where: {
                class: {
                    id: idClass
                }
            }
        });
    }

    findByName = async (nameFind) => {
        return await this.repository.find({
            relations : {
                class : true
            },
            where: {name: Like(`%${nameFind}%`)}
        });
    }

    findByPoint = async (point1, point2) => {
        return await this.repository.find({
            relations: {
                class: true
            },
            where: {
                point: Between(
                    point1,
                    point2
                )
            }
        });
    }

    orderByPoint = async() => {
        return await this.repository.find({
            relations: {
                class: true
            },
            order: {
                point: "DESC"
            }
        });
    }
}

export default new StudentService();
