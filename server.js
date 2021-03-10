const express=require('express');
const connectDB= require('./db.config/connection')

const PORT=process.env.PORT || 3000;

const app=express();
app.use(express.json({extended:false}))
app.use('/api/userModel',require('./api/user'))
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})