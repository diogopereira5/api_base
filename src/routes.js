import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

//minhas rotas
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//middlewares auth
routes.use(authMiddleware);
routes.put('/users', UserController.update);

//upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);


export default routes;