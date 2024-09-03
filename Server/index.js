// mongodb+srv://anirudhamane45:<db_password>@udemycluster.qhba1.mongodb.net/?retryWrites=true&w=majority&appName=UdemyCluster

const express = require('express');

const cors = require('cors');

const connectDB = require('./database');

const RegisterUser = require('./models/register');

const LoginUser = require('./models/login');

const app =express();
app.use(express.json());
app.use(cors());

connectDB();

app.post('/', async(req,res) => {
    let user=new RegisterUser(req.body);

    let result=await user.save();
    res.send(result);
});

app.post('/', async(req,res) => {
    let user=new LoginUser(req.body);

    let result=await user.save();
    res.send(result);
});

app.listen(3000,()=>{
    console.log("app is running");
})