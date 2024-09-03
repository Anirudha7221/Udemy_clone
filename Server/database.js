const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const conncet=await mongoose.connect(
            'mongodb+srv://anirudhamane45:udemy09@udemycluster.qhba1.mongodb.net/testudemy?retryWrites=true&w=majority&appName=UdemyCluster'
        );
        console.log('MongoDB connected');
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;