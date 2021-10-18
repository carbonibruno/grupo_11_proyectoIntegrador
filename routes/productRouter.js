const express = require('express');
const routerProductos = express.Router();
const path = require('path')
const multer = require('multer');

const {body} =require('express-validator');

const productController = require('../controllers/productController');

/*multer*/

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
       cb(null, ('./public/img'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
       cb(null, fileName);
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
