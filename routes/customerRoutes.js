const express=require('express');
const getCustomers= require('../controllers/customerController')
const router= express.Router();



let allCustomers=[];

router.get("/getCustomers",(req,res)=>{

    try{
        return getCustomers(req,res);
    }catch(err){
        res.status(500).json({
            msg: "error ocured"
        });
    }
});

router.post("/createCustomer",(req, res)=>{
    try{
        
        console.log(req.body);
        allCustomers.push(req.body);
        res.status(200).json({
            msg:"customer successfully created...",
            allCustomers
        });

    }catch(err){
        res.status(500).json({
            msg: "error ocured"
        });
    }
})

router.delete("/deleteCustomer/:name/:wife",(req, res)=>{
    try{
        
        console.log(req.params);
        for(let i=0;i<allCustomers.length;i++){
            if(allCustomers[i].name==req.params.name){
                console.log(i);
                // delete allCustomer[i]
            }
        }
        
        res.status(200).json({
            msg:"customer successfully deleted...",
            allCustomers
        });

    }catch(err){
        res.status(500).json({
            msg: "error ocured"
        });
    }
});

module.exports =router;



