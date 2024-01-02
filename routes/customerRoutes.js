const express=require('express');
const getCustomers= require('../controllers/customerController')
const router= express.Router();
const PORT =3000;


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

// middleware is a function

function authMiddleWare(req,res,next){
     
    // console.log("inside middleware")
    // if(req.body.age<18){
    //     res.status(200).json({
    //         msg: "user age not eligible"
    //     }); 
    // }else{
    //     next();
    // }

    if("susbcription"){
        // ok - give mvie
    }else{
        //not ok
    }

} 

router.post("/getmovie1", authMiddleWare, (req,res)=>{

    res.status(200).json({
        //movie file
    })
});


router.post("/getmovie1", authMiddleWare,  (req,res)=>{

    res.status(200).json({
        //movie file
    })
});






router.post("/getmovie2", authMiddleWare, (req,res)=>{
    res.status(200).json({
        //movie file
    })
});

router.post("/getmovie3", authMiddleWare, (req,res)=>{


    res.status(200).json({
        //movie file
    })
});


router.post("/createCustomer", authMiddleWare, (req, res)=>{
    try{
        console.log("inside api")
        
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



// middlewares 