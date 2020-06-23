const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index_controller');



router.get('/', controllers.index);





module.exports = router