
const fs = require('fs');
const path = require('path');
/*const { update } = require('../../../../../Programacion/Full/Clase 21_Get/material-revisado/src/controllers/productsController');*/

const productsFilePath = path.join(__dirname, '../data/baseDeDatosProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    
    indexProductos: (req,res) => {
        res.render("listadoGeneralProducto", {productos: productos});
    }, 

    detalle: (req,res) => {
        const id = req.params.id;
		const producto = productos.find(producto => {
			return producto.id == id;
		})
        res.render("detalleProducto", {producto:producto});
    }, 

    carritoProducto: (req,res) => {
        res.render("carritoProducto")
        },
    
    /*crear producto*/
    crear: (req,res) => {
    res.render('crearProducto');    
    },
    
    /*guardar producto creado*/
    
    store: (req,res) => {

        const newProduct = {
            id: productos[productos.length - 1].id + 1,
            name: req.body.nombre,
            price: req.body.price,
            discount: 0,
            category: req.body.category,
            description: req.body.description,
            image: "anillos.jpg"
         }
 
         productos.push(newProduct);
  
         fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));
         
         res.redirect("/productos"); /*cambiar cuando este vista productos */
        
    },
    
    /*editar producto existente*/
    
    editar: (req,res) => {
    
        let id = req.params.id;
		 
        let productToEdit = productos[id - 1];

        res.render("editarProducto", {productToEdit: productToEdit});       
    },
    
    /*actualizar producto existente*/

    update: (req,res) => {

        let id = req.params.id;

		let productToEdit = productos[id - 1];
		 
		productToEdit = {
			 id: productToEdit.id,
			 name: req.body.name,
			 price: req.body.price,
			 discount: 0,
			 category: req.body.category,
			 description: req.body.description,
			 image: req.file ? req.file.filename : productToEdit.image 
		};

        /*productos[id -1] = productToEdit;*/

        productos.forEach((producto, index) => {
            if (producto.id == id){
                productos[index] = productToEdit
            }
        });

		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

        res.redirect("/productos"); 
    },

    destroy:  (req,res) => {

        /*res.send("producto eliminado");*/
    
    let id = req.params.id;

    let finalProductos = productos.filter(product => {
        return id != product.id;
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(finalProductos, null, " "));
    
    res.redirect("/productos"); 
    
    }
}
     
module.exports = productController;