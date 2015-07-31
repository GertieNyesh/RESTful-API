//Dependencies
var restful = require('node-restful');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
var userSchema = new Schema({
	user: String,
	age: Number,
	city: String,
	height: String
});

//model
mongoose.model('User', userSchema);

//export
module.exports = restful.model('User', userSchema);