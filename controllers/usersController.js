const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;


const usersController = {
    
    acceso: (req,res) => {
        res.render("accesoUsuario");
    },
    
    /*va a la vista de nuevo usuario*/
    nuevoUsuario: (req,res) => {
        /*res.cookie('testing', "hola", {maxAge: 1000 * 30});*/
        
        db.Roles.findAll()
        .then(rol => {
            res.render("nuevoUsuario", {rol: rol});
        })

    },

    /*crear usuario*/
    processRegister: (req,res) =>{
    
    let userInDB = modeloUsuario.findByField('email', req.body.email);
    
    /*aca va la validacion del mail para no repertir usuario minuto49
    if (userInDB){
        
    }
    */
    /*let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10)
        /*falta avatar  avatar: req.file.filename*/
    
    let password = bcryptjs.hashSync(req.body.password, 10);   
    
    db.Users.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dni:req.body.dni,
            password: password,
            email: req.body.email,
            role_id: req.body.role_id          
        }
    )
    .then(()=> {
        return res.redirect("/usuarios/acceso")})            
    .catch(error => res.send(error))
    
    /*modeloUsuario.create(userToCreate);    
    
    res.redirect('/usuarios/acceso');*/
    }, 
    
    /*controlador para cuando entra un usuario existente*/
    loginProcess: (req,res) => {

       db.Users.findOne({
        where: {
          email: req.body.email,
          deleted: 0,
        },
        })

       .then(user =>{ 
          
          let userToLogin = user;

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
       })
       
       
        /*let userToLogin = db.Users.findByField('email', req.body.email); 

       
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
    },

    perfil: (req,res) =>{
       res.render("perfilUsuario.ejs")
    
    }

       
}



module.exports = usersController