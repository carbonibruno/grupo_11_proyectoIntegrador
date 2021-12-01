
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/baseDeDatosProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/*db*/
/*
let db = require('../database/models'); 
*/

const db = require('../database/models');
const sequelize = db.sequelize;

const { validationResult } = require('express-validator');


const productController = {
    
    prueba: (req,res) => {
        
        db.Roles.findAll()
        .then(rol => {
            res.render('pruebaDb.ejs', {rol: rol })
        })
        /*
        db.Products.findAll()
        .then(product => {
            res.render('pruebaDb.ejs', {product: product})
        })*/
 
    },    

    indexProductos: (req,res) => {
        
        db.Products.findAll()
        .then(product => {
            res.render('listadoGeneralProducto.ejs', {product: product})
        })
        
        /*res.render("listadoGeneralProducto", {productos: productos})*/;
    }, 

    detalle: (req,res) => {
       
        db.Products.findByPk(req.params.id)
            .then(product => {
                res.render("detalleProducto", {product: product});
            });
      
            /*
        const id = req.params.id;
		const producto = productos.find(producto => {
			return producto.id == id;
		})
        res.render("detalleProducto", {producto:producto});*/
    }, 

    carritoProducto: (req,res) => {
        res.render("carritoProducto")
    },
    
    /*crear producto*/
    crear: (req,res) => {
        /*let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        
        Promise
        .all([promGenres, promActors])
        .then(([allGenres, allActors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesAdd'), {allGenres,allActors})})
        .catch(error => res.send(error))*/
        db.Categories.findAll()
        .then(category => {
            res.render("crearProducto", {category: category});
        })
   
    /*res.render('crearProducto');*/    
    
    },
    
    /*guardar producto creado*/
    
    store: (req,res) => {

        let resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
           
            db.Categories.findAll()
            .then(category => {
             return res.render("crearProducto", {errors: resultValidation.mapped(), oldData: req.body, category: category});
             
         }) } else {


        db.Products.create(
            {
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category_id,
                description: req.body.description,
                image: req.file
            }
        )
        .then(()=> {
            return res.redirect("/productos")})            
        .catch(error => res.send(error))
         }
        /*
        const newProduct = {
            id: productos[productos.length - 1].id + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename
         }
 
         productos.push(newProduct);
  
         fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));
         
         res.redirect("/productos"); /*cambiar cuando este vista productos */
        
    },
    
    /*editar producto existente*/
    
    editar: (req,res) => {
    
        let productoAEditar = db.Products.findByPk(req.params.id);
        console.log('productoAEditar')
        let categoria = db.Categories.findAll();
        console.log('categoria')

        
        Promise.all([productoAEditar, categoria])
        .then(([product, category]) => {
            res.render("editarProducto", {product: product, category: category});
        })
        .catch(error => console.log(error))
       
        /*let id = req.params.id;
		 
        let productToEdit = productos[id - 1];

        res.render("editarProducto", {productToEdit: productToEdit})*/       
    },
    
    /*actualizar producto existente*/

    update: (req,res) => {

        let productId = req.params.id;
        
        db.Products.update(
            {
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category_id,
                description: req.body.description,
                image: req.file
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/productos')})            
        .catch(error => res.send(error))
     
        /*
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

        /*productos.forEach((producto, index) => {
            if (producto.id == id){
                productos[index] = productToEdit
            }
        });

		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

        res.redirect("/productos");*/ 
    },

    destroy:  (req,res) => {

        let productId = req.params.id;
        db.Products.destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
            .then(()=>{
                return res.redirect('/productos')})
            .catch(error => res.send(error)) 
     
    /*res.send("producto eliminado");*/
    
    /*    
    let id = req.params.id;

    let finalProductos = productos.filter(product => {
        return id != product.id;
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(finalProductos, null, " "));
    
    res.redirect("/productos"); 
    */
    }
}
     
module.exports = productController;