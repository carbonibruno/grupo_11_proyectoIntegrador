const express = require('express');
const routerUsuarios = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware')

const usuariosController = require('../controllers/usersController');
const router = require('./mainRouter');
const usersController = require('../controllers/usersController');

/*acceso login usuario*/
routerUsuarios.get('/acceso', guestMiddleware, usuariosController.acceso);
routerUsuarios.post('/acceso', usuariosController.loginProcess);

/*acceso nuevo usuario*/
routerUsuarios.get('/acceso/nuevoUsuario',guestMiddleware, usuariosController.nuevoUsuario);
routerUsuarios.post('/acceso/nuevoUsuario', usuariosController.processRegister);

/*acceso perfil usuario*/
routerUsuarios.get('/acceso/perfil', usuariosController.perfil);

/*logout*/
router.get('/logout/', usersController.logout)

module.exports = routerUsuarios;