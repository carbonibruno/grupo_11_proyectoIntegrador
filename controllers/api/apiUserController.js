
const db = require('../../database/models');
const sequelize = db.sequelize;

const apiUsersController = {

   allUsers: function (req,res) {

      db.Users.findAll(
          {where: {deleted:0}
        })

      .then(usersInDb => {
         
         let newArray = usersInDb.map((user) => {
             return user.dataValues;
         })

         newArray.forEach((user) => {
             delete user.password;
             delete user.roleId;
             user.detailUrl = 'http://localhost:3500/api/${user.id}'
         })

         return res.status(200).json({
             total: usersInDb.length,
             data: newArray,
             status: 200
         })
      })
      .catch(error => {console.log(error)})


    }

}


module.exports = apiUsersController;