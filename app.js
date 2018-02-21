var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Set view engine
var ejs = require('ejs').renderFile;
app.engine('html', ejs);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
var index = require('./routes/index');
var time = require('./routes/time');
var login = require('./routes/login');

// Routing
app.use('/', index);
app.use('/time', time);
app.use('/login', login);


app.listen(3000, function(){
  console.log('Server started at port 3000');
});

module.exports = app;