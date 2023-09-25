const mongoose = require('mongoose');

const pnrSchema = mongoose.Schema({
    pnrnumber :{
        type:Number,
        required:true
    }
},{
    timestamps: true,
});

const pnrDetails = mongoose.model('pnrDetails',pnrSchema);

module.exports = pnrDetails;