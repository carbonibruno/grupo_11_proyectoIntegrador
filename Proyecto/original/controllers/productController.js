
const productController = {
    
    indexProductos: (req,res) => {
        res.send("Aca van todos los productos")
    }, 

    detalle: (req,res) => {
        res.render("detalleProducto")
    }, 

    carrito: (req,res) => {
    res.render("carrito")
    }

     
}

module.exports = productController;