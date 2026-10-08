import { Router } from "express";
import { supabase } from "../../lib/supabase.js";
import { validateSchema } from "../../middlewares/validate.js";
import { requireAuth } from "../../middlewares/auth.js";
import { createTaskRepository } from "./task.repository.js";
import { createTaskService } from "./task.service.js";
import { createTaskController } from "./task.controller.js";
import { createTaskSchema, taskIdParams, updateTaskSchema } from './task.schema.js';

const taskRepository = createTaskRepository(supabase);
const taskService = createTaskService(taskRepository);
const taskController = createTaskController(taskService);

export const taskRouter = Router();

// Todas las rutas de tareas requieren token válido
taskRouter.use(requireAuth);

taskRouter.get("/", taskController.list);
taskRouter.get('/:id', validateSchema(taskIdParams, 'params'), taskController.getById);
taskRouter.post("/", validateSchema(createTaskSchema), taskController.create);
taskRouter.patch('/:id', validateSchema(taskIdParams, 'params'), validateSchema(updateTaskSchema), taskController.update);
taskRouter.delete('/:id', validateSchema(taskIdParams, 'params'), taskController.remove);

export const tasksRouter = taskRouter;
