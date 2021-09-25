

const usersController = {

    acceso: (req,res) => {
        res.render("accesoUsuario");
    },

    newUser: (req,res) => {
        res.render("newUser");
    }
    
}

module.exports = usersController;