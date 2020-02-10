"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _cors3 = require('./config/cors'); var _cors4 = _interopRequireDefault(_cors3);

require('./database');

class App {

    constructor() {
        this.server = _express2.default.call(void 0, );

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(_cors4.default);
        this.server.use(_express2.default.json());
        this.server.use('/files', _express2.default.static(_path2.default.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(_routes2.default);
    }

}

exports. default = new App().server;