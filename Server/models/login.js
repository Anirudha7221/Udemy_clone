const mongoose = require('mongoose');

const LoginUser=new mongoose.Schema({
    Username: String,
    Password: String,
});

const itemModel = mongoose.model("item",LoginUser);

module.exports=itemModel;