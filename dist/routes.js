"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _multer4.default);

//minhas rotas
routes.post('/users', _UserController2.default.store);
routes.post('/sessions', _SessionController2.default.store);

routes.get('/', (req, res) => {
    return res.json({ok: true})
})

//middlewares auth
routes.use(_auth2.default);
routes.put('/users', _UserController2.default.update);
routes.get('/users', _UserController2.default.index);

//upload de arquivos
routes.post('/files', upload.single('file'), _FileController2.default.store);


exports. default = routes;