const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: {
        type:String,
        required: true,
        trim:true
    },
    marketID: {
        type:String,
        required: true,
        trim:true
    },
    marketName: {
        type:String,
        required:true,
        trim:true
    },
    cmdtyID: {
        type:String,
        required:true,
        trim:true
    },
    marketType: {
        type:String,
        required:true,
        trim:true
    },
    cmdtyName: {
        type:String,
        required:true,
        trim:true
    },
    priceUnit: {
        type:String,
        required:true,
        trim:true
    },
    convFctr: {
        type:Number,
        required:true,
        trim:true
    },
    price: {
        type:Number,
        required:true,
        trim:true
    },

})

const Mandi = mongoose.model('Mandi', userSchema);

module.exports = Mandi;