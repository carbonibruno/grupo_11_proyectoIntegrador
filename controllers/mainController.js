
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/baseDeDatosProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    
    index: (req,res) => {
        console.log(req.cookies.userEmail);
		const productosFavoritos = productos.filter(productos => {
			return productos.category == "favoritos";
		});
        
		const productosGeneral = productos.filter(productos => {
			return productos.category == "general";
		});

		 console.log(req.session.userLogged)

        res.render("index", {productosFavoritos: productosFavoritos, productosGeneral: productosGeneral, productos: productos, user: req.session.userLogged});
    },

}


module.exports = mainController;