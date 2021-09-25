var express = require('express');
var router = express.Router();

const {index, detalle} = require('../controllers/mainController')

/* GET home page. */
router.get('/', index);
router.get('/detail/:id', detalle);

module.exports = router;
