const fs = require('fs');

const modeloUsuario = {

    fileName:'./data/baseDeDatosUsuarios.json', 
    
    /*traigo usuarios base de datos*/
    getData: function() {
       return JSON.parse(fs.readFileSync(this.fileName,'utf-8')); 
    },

    generateId: function () {
            let allUsers = this.findAll();
            let lastUser = allUsers.pop();
            if (lastUser){
                return lastUser.id +1
            }
            return 1;
    },      
    
    /*traigo usuarios base de datos*/
    findAll: function () {
     return this.getData();        
    },
    
    /*traigo usuario por id*/ 
    findByPk: function (id) {
      let allUsers = this.findAll();
      let userFound = allUsers.find(oneUser => oneUser.id);
      return userFound;  
    },
    
    /*traer por campo*/
    findByField: function (field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;  
    },
    
    /*crear usuario*/
    create: function (userData) {
       let allUsers = this.findAll();
       let newUser = {
           id:this.generateId(),
           ...userData
       }
       allUsers.push(newUser);
       fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
       return newUser; 
    },

    /*borrar usuario*/
    delete: function (id) {
      let allUsers = this.findAll();  
      let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);  
      fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
      return true;   
    }

}

module.exports = modeloUsuario;