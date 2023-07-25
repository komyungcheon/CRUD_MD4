import {Class} from "../entity/class";
import {AppDataSource} from "../data-source";

class ClassService {
    private classRepository;
    constructor() {
        this.classRepository = AppDataSource.getRepository(Class);
    }

    getAll = async () => {
        let result = await this.classRepository.find({
            relations : {
                students : true
            }
        });

        return result;
    }

    add = async (product) => {
        let result = await this.classRepository.save(product);
        return result;
    }

    delete = async (id) =>{
        let result = await this.classRepository.delete(id);
        return result;
    }
    update = async (id, data) => {
        return await this.classRepository.update(id, data);
    }

}

export default new ClassService();
