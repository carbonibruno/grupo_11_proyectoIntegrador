const express = require('express');
const routerUsuarios = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware')


const usuariosController = require('../controllers/usersController');
const router = require('./mainRouter');
const usersController = require('../controllers/usersController');

const { body }  = require('express-validator');

const validations = [
    body("first_name").notEmpty().withMessage('Ingrese su nombre'),
    body('last_name').notEmpty().withMessage('Ingrese su apellido'),
    body('email').notEmpty().withMessage('Ingrese un mail valido'),
    body('password').notEmpty().withMessage('El minimo del password son 8 caracteres'),
]

/*acceso login usuario*/
routerUsuarios.get('/acceso', guestMiddleware, usuariosController.acceso);
routerUsuarios.post('/acceso', usuariosController.loginProcess);

/*acceso nuevo usuario*/
routerUsuarios.get('/acceso/nuevoUsuario',guestMiddleware, usuariosController.nuevoUsuario);
routerUsuarios.post('/acceso/nuevoUsuario', validations , usuariosController.processRegister);

/*acceso perfil usuario*/

routerUsuarios.get('/acceso/perfil', usuariosController.perfil);

/*logout*/
router.get('/logout/', usersController.logout)

module.exports = routerUsuarios;