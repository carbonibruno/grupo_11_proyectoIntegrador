const express = require('express');
const routerProductos = express.Router();
const path = require('path')
const multer = require('multer');

const productController = require('../controllers/productController');

/*multer*/

const storage = multer.diskStorage({ 
    destination: 
    function (req, file, cb) {
       cb(null, path.resolve('public/img'));
    },
    filename: function (req, file, cb) {
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/img");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})*/

const upload = multer({storage: storage});
/**/

/*rutas*/

routerProductos.get('/', productController.indexProductos);
routerProductos.get('/detalle/:id', productController.detalle);

routerProductos.get('/carritoProducto', productController.carritoProducto);


/*creacion*/
routerProductos.get('/crear', productController.crear);
routerProductos.post('/crear', upload.single("image"), productController.store); 


/*edicion*/
routerProductos.get('/editar/:id', productController.editar);
routerProductos.put('/editar/:id', productController.update); 


/*falta eliminar*/

routerProductos.delete('/delete/:id', productController.destroy);


module.exports = routerProductos;
