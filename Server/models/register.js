const mongoose = require('mongoose');

const RegisterUser=new mongoose.Schema({
    name: String,
    password: String,
    confirmPassword: String
});

const itemModel = mongoose.model("item",RegisterUser);

module.exports=itemModel;