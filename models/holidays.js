const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const holidaySchema = new Schema({
    title: {
        type: String, 
        required: true,
    }, 
    date: {
        type: String, 
        required: true,
    }, 
    day: {
        type: String, 
        required: true,
    }, 
}); 

module.exports = mongoose.model('Holidays', holidaySchema);