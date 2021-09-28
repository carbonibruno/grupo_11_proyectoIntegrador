const express = require('express');
const routerProductos = express.Router();

const productController = require('../../controllers/productController');

routerProductos.get('/', productController.indexProductos);
routerProductos.get('/detalle', productController.detalle);
routerProductos.get('/carrito', productController.carrito);

routerProductos.get('/crear', productController.crear);
routerProductos.post('/', productController.store); 



routerProductos.get('/editar/:id', productController.editar);


/* editar
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 
*/

module.exports = routerProductos;
