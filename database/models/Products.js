module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Products';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
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
        timestamps: false,
        
    }
    const Products = sequelize.define(alias, cols, config); 
  
    
    Products.associate = function (models) {
        Products.belongsTo(models.Categories, { 
            as: "categories",
            foreignKey: "category_id",
            timestamps: false
        })
        
    }

    return Products

};