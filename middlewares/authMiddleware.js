function authMiddleware(req,res,next){

    if (!req.session.userLogged) {
        return res.redirect('/usuario/accesoNuevo')
    }
    next();
 
 }
 
 module.exports = authMiddleware;