const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const employeeSchema = new Schema({
  firstName: {
    type: String, 
    required: true
  }, 
  lastName: {
    type: String, 
    required: true
  }, 
  username: {
    type: String, 
    required: true
  }, 
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 
  joiningDate: {
    type: String, 
    required: true
  }, 
  phone: {
    type: Number, 
    required: true
  },  
  department: {
    type: String, 
    required: true
  }, 
  designation: {
    type: String, 
    required: true
  }, 
  company: {
    type: String, 
    required: true,
  }
})

module.exports = mongoose.model('Employees', employeeSchema);