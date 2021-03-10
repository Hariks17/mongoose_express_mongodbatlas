const express=require('express');

//****Importing the Configuration****//
const connectDB= require('./db.config/connection')

//****Setting PORT****//
const PORT=process.env.PORT || 3000;

const app=express();
//****Creating Connection****//
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})