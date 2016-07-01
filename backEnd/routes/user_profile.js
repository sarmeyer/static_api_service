var express = require('express');
var router = express.Router();
var data = require('../lib/data');
var getProfiles = require('../lib/functions').getProfiles;


/* GET Active users listing. */
router.get('/users/:id', function(req, res, next) {
  var userProf = req.params.id;
  console.log('************');
  console.log(userProf);
    res.json(getProfiles(data));
});

module.exports = router;
