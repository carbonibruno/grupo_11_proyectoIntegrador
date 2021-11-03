const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 
const bcryptjs = require('bcryptjs');



const usersController = {
    
    acceso: (req,res) => {
       
        res.render("accesoUsuario");
    },

    /*crear usuario*/
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
    
    /*va a la vista de nuevo usuario*/
    nuevoUsuario: (req,res) => {
        /*res.cookie('testing', "hola", {maxAge: 1000 * 30});*/
        res.render("nuevoUsuario");
    },
    
    /*controlador para cuando entra un usuario existente*/
    loginProcess: (req,res) => {

       let userToLogin = modeloUsuario.findByField('email', req.body.email); 
       
       if(userToLogin){
         let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
         if (isOkThePassword){
             delete userToLogin.password;
             req.session.userLogged = userToLogin;

             if(req.body.remember_user){
                 res.cookie('userEmail',req.body.email, {maxAge: (1000 * 60) *2})
             }
             return res.redirect('/')
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
    },
    
    /*agregar logout*/
    logout: (req,res) =>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
       
}



module.exports = usersController