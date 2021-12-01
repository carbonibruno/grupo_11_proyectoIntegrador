const express = require('express');
const routerProductos = express.Router();
const path = require('path');
const multer = require('multer');

const productController = require('../controllers/productController');

const { body }  = require('express-validator');

const validations = [
    
    body("name")
     .notEmpty().withMessage('Ingrese un nombre del producto').bail()
     .isLength({min:5}).withMessage('Su nombre tener mas de 5 caracteres').bail(),
    body('price')
     .notEmpty().withMessage('Ingrese un valor').bail(),
    body('description')
     .notEmpty().withMessage('Ingrese una descripcion').bail()
     .isLength({min:20}).withMessage('La descripcion debe tener como minimo 20 caracteres').bail(),
   /* falta imagen*/
]

/*multer*/
/*
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
       cb(null, path.join(__dirname,'../public/img'));
    },
    filename: (req, file, cb) => {
       console.log(file);
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
       cb(null, fileName);
    }
})*/
/*cb(null, path.join(__dirname,'../public/img'));*/
/*
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
       cb(null, '../public/img');
    },
    filename: (req, file, cb) => {
      cb(null, ${Date.now()}_img_${path.extname(file.originalname)}); 
      /*let fileName = 'img-' + Date.now() + path.extname(file.originalname);
       cb(null, fileName);*/
    /*}
})*/

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) {
      cb(null, './public/img');
   },
   filename: function (req, file, cb) {
  /*cb(null, `${Date.now}()_img_${path.extname(file.originalname)}`);*/
      cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname))
   }
})


const upload = multer({storage: storage});


/*rutas*/

routerProductos.get('/', productController.indexProductos);
routerProductos.get('/detalle/:id', productController.detalle);

routerProductos.get('/carritoProducto', productController.carritoProducto);


/*creacion*/
routerProductos.get('/crear', productController.crear);
routerProductos.post('/crear', upload.single("image"), validations, productController.store); 


/*edicion*/
routerProductos.get('/editar/:id', productController.editar);
routerProductos.post('/editar/:id',upload.single("image"), productController.update); 


/*falta eliminar*/

routerProductos.delete('/delete/:id', productController.destroy);

/*ruta prueba db*/
routerProductos.get('/prueba', productController.prueba);


module.exports = routerProductos;
