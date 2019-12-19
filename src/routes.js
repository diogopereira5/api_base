import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

//minhas rotas
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//middlewares auth
routes.use(authMiddleware);
routes.put('/users', UserController.update);


export default routes;