const mongoose = require('mongoose');

const AppsSchema = mongoose.Schema({
   name: {type: String , required: true},
   price: {type: String , required: true},
   logo: {type: String , required: true},
   platforms: {type: Array , required: true},
   description: {type: String , required: true},
   tech_stack: {type: Array , required: true},
   code: {type: Object , required: true}
});

module.exports = mongoose.model('Apps', AppsSchema,'AppsData');