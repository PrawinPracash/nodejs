const express=require('express');
const customerRouter= require('./routes/customerRoutes');
const studentRouter=require('./routes/studentRouter');
const userRouter= require('./routes/userRouter');
const app=express();
const mongoose= require('mongoose');

const PORT= 3000;
app.use(express.json());
app.use(customerRouter,studentRouter,userRouter);

// Mongodb ORM - mongoose


const db="mongodb+srv://prakash110cse:5pRZsoUEtCLdJG3V@cluster0.xfrkywi.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log("Db connected successfully... ")
});

console.log("pravee");
app.listen(PORT,()=>{
    console.log("server running.....");
}); 



// models 
// users 