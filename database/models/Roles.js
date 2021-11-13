module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Roles';

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        role: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
           
    };
    
    let config = {

        tableName: "roles", 
        timestamps: false,
        
    }
    const Roles = sequelize.define(alias, cols, config); 

    Roles.associate = function (models) {
        Roles.hasMany(models.Users, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "roles",        
            foreignKey: "role_id",
            
        })
    }

    return Roles

};