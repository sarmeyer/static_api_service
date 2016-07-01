var express = require('express');
var router = express.Router();
var data = require('../lib/data');
var userProfiles = require('../lib/functions').userProfiles;


router.get('/:id', function(req, res, next) {
    var userProfId = req.params.id;
    res.json(userProfiles(data, userProfId));
});

module.exports = router;
