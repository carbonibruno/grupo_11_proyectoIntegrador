const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api/apiUserController');


router.get("/", apiUsersController.allUsers);


module.exports = router;
