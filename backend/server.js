require('dotenv').config();
const connectDB=require('./config/db')
//const seederScript=require('./seederScript')

connectDB();
const express = require('express');
const app =express();
const productRoute=require('./routes/productRoute')
app.use(express.json());
app.use('/api/products',productRoute);
app.get('/',(req,res)=>{
    
    res.send("Hello world");
})
const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))