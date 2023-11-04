const express=require('express');
const customerRouter= require('./routes/customerRoutes');
const studentRouter=require('./routes/studentRouter')
const app=express();

app.use(express.json());
app.use(customerRouter,studentRouter);


app.listen(3000,()=>{
    console.log("server running.....");
}); 