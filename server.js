//Dependencies
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var User = require('./models/api');
var parser = require('body-parser');
var path= require('path');

var app = express();

//configuration
mongoose.connect('mongodb://127.0.0.1/haha');

//Express configs
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());


//routes
User.methods(['get', 'post', 'put', 'delete']);
User.register(app, '/user');


//default path
app.get('/', function (req, res){
	// res.send('Watch me Whiiiiiiiiiiiiiip');
	res.sendFile(path.join(__dirname + '/assets/index.html'));
	app.use(express.static(__dirname + '/assets'));
});

//set port and listen
app.listen(4040);
console.log('Server is up bruh');