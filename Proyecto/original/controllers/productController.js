
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/baseDeDatosProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    
    indexProductos: (req,res) => {
        res.send("Aca van todos los productos")
    }, 

    detalle: (req,res) => {
        res.render("detalleProducto")
    }, 

    carrito: (req,res) => {
    res.render("carrito")
    },
    
    /*crear producto*/
    crear: (req,res) => {
    res.render('crearProducto');    
    },
    
    /*guardar producto creado*/
    store: (req,res) => {
        
        const newProduct = {
            id: productos[products.length - 1].id + 1,
            name: req.body.nombre,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            image: "default-image.png",
         }
 
         productos.push(newProduct);
  
         fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));
 
         res.redirect("/crearProducto"); /*cambiar cuando este vista productos */
        
    },
    
    /*editar producto existente*/
    
    editar: (req,res) => {
    res.render('editarProducto');    
    }

     
}

module.exports = productController;