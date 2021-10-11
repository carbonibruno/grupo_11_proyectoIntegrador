const express = require('express');
const routerProductos = express.Router();
const path = require('path')
const multer = require('multer');

const productController = require('../../controllers/productController');

/*multer*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/img");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});
/**/

/*rutas*/

routerProductos.get('/', productController.indexProductos);
routerProductos.get('/detalle/:id', productController.detalle);

routerProductos.get('/carritoProducto', productController.carritoProducto);


/*creacion*/
routerProductos.get('/crear', productController.crear);
routerProductos.post('/', upload.single("image"), productController.store); 

/*edicion*/
routerProductos.get('/editar/:id', productController.editar);
routerProductos.put('/editar/:id', upload.single("image"), productController.update); 

/*falta eliminar*/




module.exports = routerProductos;
