var express = require('express');
var router = express.Router();

/**
 * GET /
 * Handles index request
 */
router.get('/', function (req, res) {
  var data = {
    title: 'Real Truck Code assignment',
    endpoints: [
      { name: '/time', purpose: 'get Time in JSON'},
      { name: '/login', purpose: 'Login'},
      { name: '/login/as/John', purpose: 'Handle any request with parameter'},
      { name: '/login/json/John', purpose: 'Takes in parameter and return in JSON'}
    ]
  };
  // Render the view with the data
  res.render('index', data);
});

module.exports = router;