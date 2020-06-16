// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var empSchema = new mongoose.Schema({
    name: String,
    emp_id: String,
    mob: String,
    remark: String,
    department: String,
    mname: String,
    man_id: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10:String,
    q11:String

});

// Return model
module.exports = restful.model('Emp', empSchema);