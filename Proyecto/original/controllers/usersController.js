

const usersController = {

    acceso: (req,res) => {
        res.render("accesoUsuario");
    },

    nuevoUsuario: (req,res) => {
        res.render("nuevoUsuario");
    }
    
}

module.exports = usersController;