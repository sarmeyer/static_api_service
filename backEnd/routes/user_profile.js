var express = require('express');
var router = express.Router();
var data = require('../lib/data');
var getProfiles = require('../lib/functions');


/* GET Active users listing. */
router.get('/user/:id', function(req, res, next) {
  var userID = req.params.id;
  console.log('************');
  console.log(userID);
    res.json(getActives(data));
});

module.exports = router;
