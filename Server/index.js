// mongodb+srv://anirudhamane45:<db_password>@udemycluster.qhba1.mongodb.net/?retryWrites=true&w=majority&appName=UdemyCluster

const express = require('express');

const path = require("path");

const bcrypt= require('bcrypt');

const cors = require('cors');
const saltround=10;

const connectDB = require('./database');

const User = require('./models/user');

const PORT = process.env.PORT || 8000;

const app =express();
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(cors());

connectDB();


app.post('/', async(req,res) => {

  try {
     const {email ,password}= await req.body;

     const hashedPassword= await bcrypt.hash(password, saltround);

     let user=new User({email, password: hashedPassword});

     user=await user.save();

     res.status(200).json();
  } catch (error) {
    res.status(404).json()
  }
});


app.post('/login',async(req,res)=>{
    const {email,newpassword}=req.body;

    try {
      const user = await User.findOne({email});

      if(!user){
        return res.status(401).send("User Not Found");
      }
      const match= await bcrypt.compare(password, user.password);
      
      if(match){
        return res.status(200).json();
      }
      else{
        return res.status(401).send("Wrong Password");
      }
    } catch (error) {
      res.status(404).json();
    }
})

app.post('/reset-password', async(req,res)=>{
    const {email,password}=req.body;

    try {
      const user=await User.findOne({email});

      if(!user){
        return res.status(401).send("User Not Found");
      }

      const changedPassword=await bcrypt.hash(password, saltround);

      user.password=changedPassword;

      await user.save();

      res.status(200).send("Password Changed Successfuly");
    } catch (error) {
      return res.status(404).json();
    }
})

app.listen(PORT,()=>{
    console.log("app is running");
})