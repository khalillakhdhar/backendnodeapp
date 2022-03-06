const mongoose = require('mongoose');
const RappelSchema=new mongoose.Schema({
text:
{
    type:String,
    required:true,
},
date:
{
    type:String,
    required:true
}


});
module.exports = Rappel = mongoose.model('rappel', RappelSchema);
