module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Products';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.STRING,
        },
        
    };
    let config = {

        tableName: "products", 
        timestamps: true,
        
    }
    const Products = sequelize.define(alias, cols, config); 

    /*asociacion  de productos con tipo de producto  
    Products.associate = function (models) {
        Products.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }*/

    return Products

};