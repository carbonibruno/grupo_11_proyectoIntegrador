module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Categories';

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        category: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    
    };
    
    let config = {

        tableName: "categories", 
        timestamps: false,
        
    }
    const Categories = sequelize.define(alias, cols, config); 

     
    Categories.associate = function (models) {
        Categories.hasMany(models.Products, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "categories",        
            foreignKey: "category_id",
            
        })
    }

    return Categories

};