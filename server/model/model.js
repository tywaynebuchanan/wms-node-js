const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:String,
    status:String
})

const wmsDB = mongoose.model('wms',schema);

module.exports = wmsDB;