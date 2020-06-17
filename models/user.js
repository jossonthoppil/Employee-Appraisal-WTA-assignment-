// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
    man_id: String,
    pwd: String,
    name:String

});

// Return model
module.exports = restful.model('User',userSchema);