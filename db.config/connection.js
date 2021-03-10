const mongoose=require('mongoose');

//****Add Your Cluster URI****//
const URI= "";

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('db connected...!');//This will be printed in console if connection is successfull
}

module.exports=connectDB;