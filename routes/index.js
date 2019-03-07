var express = require('express');
var router = express.Router();
const { version, name } = require('../package');

router.get('/', function(req, res, next) {
  const health = {
    name,
    version,
  }
  res.json({health});
});

module.exports = router;
