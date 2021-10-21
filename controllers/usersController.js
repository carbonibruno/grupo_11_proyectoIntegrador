const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 

const usersController = {
    

    acceso: (req,res) => {
        res.render("accesoUsuario");
    },

    processRegister: (req,res) =>{
    
    modeloUsuario.create(req.body);    
    
    res.send('Usuario Agregado');
    
    }, 

    nuevoUsuario: (req,res) => {
        res.render("nuevoUsuario");
    },

    
    
}



module.exports = usersController