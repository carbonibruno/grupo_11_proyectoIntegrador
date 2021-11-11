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
            type: dataTypes.STRING,
            allowNull: false
        },

        password: {
            type: dataTypes.STRING,
            allowNull: false
        },

        delete: {
            type: dataTypes.TINYINT
        },

        role_id: {
            type: dataTypes.STRING,
            allowNull: false
        }       
        
    };
    
    let config = {

        tableName: "users", 
        timestamps: true,
        
    }
    const Users = sequelize.define(alias, cols, config); 

    /* asociacion de usuario con admin o comun
    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }*/

    return Users

};