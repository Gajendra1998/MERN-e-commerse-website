require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = async ()=>{
try {
    await mongoose.connect("mongodb+srv://Gajendra:gajju123@cluster0.lmj8z.mongodb.net/Ecommerse?authSource=admin&replicaSet=atlas-40dwfi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
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