var express = require('express');
var router = express.Router();
var data = require('../lib/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(data);
});

module.exports = router;
