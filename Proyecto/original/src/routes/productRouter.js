const express = require('express');
const routerProductos = express.Router();

const productController = require('../../controllers/productController');

routerProductos.get('/', productController.indexProductos);
routerProductos.get('/detalle', productController.detalle);
routerProductos.get('/carrito', productController.carrito);

module.exports = routerProductos;
