declare class ClassService {
    private classRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: ClassService;
export default _default;
