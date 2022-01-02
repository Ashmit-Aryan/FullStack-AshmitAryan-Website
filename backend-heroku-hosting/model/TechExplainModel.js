const mongoose = require('mongoose');

const TechExplainSchema = mongoose.Schema({
   title: {type: String , reqired: true},
   img_url: {type: String , reqired: true},
   description: {type: String , reqired: true},
   pros: {type: Array , reqired: true},
   cons: {type: Array , reqired: true},
   video_link: {type: String , reqired: true}
});

module.exports = mongoose.model('TechExplain', TechExplainSchema,'TechExplainData');