const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 
const bcryptjs = require('bcryptjs');

const usersController = {
    

    acceso: (req,res) => {
        res.render("accesoUsuario");
    },

    processRegister: (req,res) =>{
    
    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10)
        /*falta avatar  avatar: req.file.filename*/
    }

    modeloUsuario.create(userToCreate);    
    
    res.send('Usuario Agregado');
    
    }, 

    nuevoUsuario: (req,res) => {
        res.render("nuevoUsuario");
    },

    
    
}



module.exports = usersController