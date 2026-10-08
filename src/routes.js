import { Router } from "express";
import { healthRouter } from "./modules/health/health.routes.js";
import { docsRouter } from "./docs/docs.routes.js";
import { authRouter } from "./modules/auth/auth.routes.js";
import { taskRouter } from "./modules/tasks/task.routes.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/docs", docsRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/tasks", taskRouter);