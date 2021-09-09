require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Mongodb connected");
}catch(err){
    console.error("could not connected to mongodb")
    process.exit(1);
}
} 
module.exports=connectDB;