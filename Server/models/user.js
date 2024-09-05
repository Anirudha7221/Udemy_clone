const mongoose = require('mongoose');

const User=new mongoose.Schema({
    email: String,
    password: String,
});

const itemModel = mongoose.model("items",User);

module.exports=itemModel;