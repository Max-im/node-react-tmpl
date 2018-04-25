var express     = require('express');
var app         = express();
var path        = require('path');
var config      = require('./config').config;

//SETTINGS
app.use(express.static('public'));
app.set("view engine", "ejs");

// ROUTE
app.get('/', (req, res) => res.render('index'));

// LAUNCH
app.listen(config.port, config.host, () => console.log('Server is runing on port ' + config.port));