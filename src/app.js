import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import allowCors from './config/cors';

import './database';

class App {

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(allowCors);
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(routes);
    }

}

export default new App().server;