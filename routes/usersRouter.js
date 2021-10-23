const express = require('express');
const routerUsuarios = express.Router();

const usuariosController = require('../controllers/usersController');

/*acceso login usuario*/
routerUsuarios.get('/acceso', usuariosController.acceso);
routerUsuarios.post('/acceso', usuariosController.loginProcess);

/*acceso nuevo usuario*/
routerUsuarios.get('/acceso/nuevoUsuario', usuariosController.nuevoUsuario);
routerUsuarios.post('/acceso/nuevoUsuario', usuariosController.processRegister);

module.exports = routerUsuarios;