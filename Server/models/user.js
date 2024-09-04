const mongoose = require('mongoose');

const User=new mongoose.Schema({
    id :String,
    email: String,
    passWord: String,
});

const itemModel = mongoose.model("items",User);

module.exports=itemModel;