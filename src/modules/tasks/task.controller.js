export function createTaskController(taskService){
    return{
        async list(req, res){
            const tasks = await taskService.list();
            res.json(tasks);
        },
        async create(req, res){
            res.status(201).json(await taskService.create(req.body));
        },
        async getById(req, res) {
            res.json(await taskService.getById(req.params.id));
        },
        async update(req, res) {
            res.json(await taskService.update(req.params.id, req.body));
        },
        async remove(req, res) {
            await taskService.remove(req.params.id);
            res.status(204).end();
        },
    };
}