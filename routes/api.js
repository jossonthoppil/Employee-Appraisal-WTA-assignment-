
// Dependencies
var express = require('express');
var router = express.Router();

//Employee
var Emp = require('../models/employee');
Emp.methods(['get','put','post','delete']);
Emp.register(router,'/emp');

// Return router
module.exports = router;
