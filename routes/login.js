var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/**
 * GET /login
 * 
 * Handles get request to /login
 */
router.get('/', function (req, res) {
  var data = {
    title: 'Login'
  };
  res.render('login', data);
});

/**
 * GET /as/:_name
 * Handles the request to login as param
 */
router.get('/as/:_name', function(req, res){
  var name = req.params._name;
  var data = {
    title: 'Welcome '+ data ,
    fullname: name
  };
  res.render('dashboard', data);
});

/**
 * GET /json/:_name
 * Returns the request in json format
 */
router.get('/json/:_name', function(req, res){
  var name =  req.params._name;
  var data = {
    fullname: name
  };
  res.json(data);
});


/**
 * POST /login
 * Handle post for /login
 */
router.post('/', function (req, res) {
  var fullname = req.body.fullname;
  var data = {
    title: 'Welcome ' + data ,
    fullname: fullname 
  }
  res.render('dashboard', data);
});

module.exports = router;