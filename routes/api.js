
// Dependencies
var express = require('express');
var router = express.Router();

//Employee
var Emp = require('../models/employee');
Emp.methods(['get','put','post','delete']);
Emp.register(router,'/emp');

//User
var User = require('../models/user');
User.methods(['get','put','post','delete']);
User.register(router,'/user');

// Return router
module.exports = router;
