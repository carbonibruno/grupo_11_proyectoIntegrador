
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


const productController = {
    
    prueba: (req,res) => {
        
        db.Categories.findAll()
        .then(category => {
            res.render('pruebaDb.ejs', {category: category})
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
    
        let productoId = req.params.id;

        db.Products.findByPk(productoId,{include: ['categories']})
        .then(product => {
            res.render("editarProducto", {product: product});
        });

        /*Promise
        .all([promMovies, promGenres, promActors])
        .then(([Movie, allGenres, allActors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
        .catch(error => res.send(error))*/
        
        /*
        /*let id = req.params.id;
		 
        let productToEdit = productos[id - 1];

        res.render("editarProducto", {productToEdit: productToEdit})*/       
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