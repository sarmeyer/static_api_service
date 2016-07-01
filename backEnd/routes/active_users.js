var express = require('express');
var router = express.Router();
var data = require('../lib/data');
var getActives = require('../lib/functions').getActives;


/* GET Active users listing. */
router.get('/', function(req, res, next) {
    res.json(getActives(data));
});

module.exports = router;
