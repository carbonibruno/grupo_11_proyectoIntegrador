module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Users';

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        last_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        dni: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        password: {
            type: dataTypes.STRING,
            allowNull: false
        },

        deleted: {
            type: dataTypes.TINYINT
        },

        role_id: {
            type: dataTypes.STRING,
            allowNull: false
        }       
        
    };
    
    let config = {

        tableName: "users", 
        timestamps: false,
        
    }
    const Users = sequelize.define(alias, cols, config); 

    Users.associate = function (models) {
        Users.belongsTo(models.Roles, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "roles",
            foreignKey: "role_id",
            timestamps: false
        })
    }    

    return Users

}