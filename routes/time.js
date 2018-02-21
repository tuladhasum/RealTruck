var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// Using bodyparser to parse as json
router.use(bodyParser.json());

/**
 * GET /time
 * Handles request for /time
 */
router.get('/', function (req, res) {
  // Get current time string
  var date = new Date();
  var currentTime = date.toLocaleTimeString();
  var currentDate = date.toLocaleDateString();

  var data = {
    currentTime: currentTime,
    currentDate: currentDate
  };
  
  // Parse the object as JSON
  res.json(data);
});

module.exports = router;