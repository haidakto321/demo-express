const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.status(200).send("zxc")
});

module.exports = router;
