const express = require('express');
const router = express.Router();

const apiProductController = require('../../controllers/api/apiProductController');


router.get("/", apiProductController.allProducts);


module.exports = router;
