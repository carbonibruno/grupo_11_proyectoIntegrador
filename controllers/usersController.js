const fs = require('fs');
const modeloUsuario = require('../models/modeloUsuario'); 
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;

const { validationResult } = require('express-validator');


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
    
       
        let password = bcryptjs.hashSync(req.body.password, 10);   
        
        let resultValidation = validationResult(req);
         
        if(resultValidation.errors.length > 0){
           
           db.Roles.findAll()
           .then(rol => {
        
            return res.render("nuevoUsuario", {errors: resultValidation.mapped(), oldData: req.body, rol: rol});
        
        }) } else {

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
        
        }
        /*modeloUsuario.create(userToCreate);    
        
        res.redirect('/usuarios/acceso');*/
        }, 
    
    /*controlador para cuando entra un usuario existente*/
    
    loginProcess: (req,res) => {

        let resultValidation = validationResult(req);

         if(resultValidation.errors.length > 0){
           return res.render("accesoUsuario", {errors: resultValidation.mapped()});
    
        }
         
        db.Users.findOne({
        where: {
          email: req.body.email,
          deleted: 0,
        },
        })

       .then(user =>{ 
 
          
          let userToLogin = user;
          
          if(userToLogin == undefined){

            return res.render("accesoUsuario", { 
                errors: {
                    email:{
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
            }})
            

          } else {  
            
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            
            if (isOkThePassword){
                delete userToLogin.password;
                
                req.session.userLogged = userToLogin;
   
                if(req.body.remember_user){
                    res.cookie('userEmail',req.body.email, {maxAge: (1000 * 60) *2})
                }

                return res.redirect('/')

            } else { 
                
                return res.render("accesoUsuario", {
                errors: {
                    password: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
                });
            }    
            /*return res.send(userToLogin);*/
          
          } 
          
       })
    
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