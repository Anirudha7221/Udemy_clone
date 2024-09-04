// mongodb+srv://anirudhamane45:<db_password>@udemycluster.qhba1.mongodb.net/?retryWrites=true&w=majority&appName=UdemyCluster

const express = require('express');

const cors = require('cors');

const connectDB = require('./database');

const User = require('./models/user');

const app =express();
app.use(express.json());
app.use(cors());

connectDB();


app.post('/', async(req,res) => {
    let user=new User(req.body);
    user=await user.save();

    // console.log("Register-page",user);
});


app.get('/', async(req,res) => {
    let email=User(req.params.email);
    let passWord=User(req.params.password);
     res.send({email,passWord});
});

app.listen(8000,()=>{
    console.log("app is running");
})