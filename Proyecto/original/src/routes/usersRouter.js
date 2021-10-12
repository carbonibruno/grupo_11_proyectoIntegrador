const express = require('express');
const routerUsuarios = express.Router();

const usuariosController = require('../../controllers/usersController');

routerUsuarios.get('/acceso', usuariosController.acceso);
routerUsuarios.get('/acceso/nuevoUsuario', usuariosController.nuevoUsuario);



module.exports = routerUsuarios;