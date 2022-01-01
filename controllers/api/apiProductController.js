
const db = require('../../database/models');
const sequelize = db.sequelize;

const apiUsersController = {

   allProducts: function (req,res) {

      db.Products.findAll()

      .then(productInDb => {
         
         let newArray = productInDb.map((product) => {
             return product.dataValues;
         })

         newArray.forEach((product) => {
           
             product.detailUrl = 'http://localhost:3500/api/'
         })

         return res.status(200).json({
             total: productInDb.length,
             data: newArray,
             status: 200
         })
      })
      .catch(error => {console.log(error)})


    }

}


module.exports = apiUsersController;