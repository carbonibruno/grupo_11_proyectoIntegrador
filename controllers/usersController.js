const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 
const bcryptjs = require('bcryptjs');

const usersController = {
    

    acceso: (req,res) => {
        res.render("accesoUsuario");
    },

    processRegister: (req,res) =>{
    
    let userInDB = modeloUsuario.findByField('email', req.body.email);
    
    /*aca va la validacion del mail para no repertir usuario minuto49
    if (userInDB){
        
    }
    */
    
    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10)
        /*falta avatar  avatar: req.file.filename*/
    }

    modeloUsuario.create(userToCreate);    
    
    res.redirect('/usuarios/acceso');
    
    }, 

    nuevoUsuario: (req,res) => {
        res.render("nuevoUsuario");
    },

    loginProcess: (req,res) => {
       
       let userToLogin = modeloUsuario.findByField('email', req.body.email); 
       
       if(userToLogin){
         let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
         if (isOkThePassword){
             return res.send('Okey')
         }  
         return res.send(userToLogin);
       }
       
       /*aca va validacion error*/
       /* minuto 59 return res.render('nuevoUsuario', {
           errors: {
               email: {
                   msg: 'No se encuentra este email en nuestra base de datos'
                  }
               }
           }); */    

       /*res.render('nuevoUsuario');*/
    }

       
}



module.exports = usersController