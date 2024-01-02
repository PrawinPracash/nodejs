const express= require('express');
const { route } = require('./customerRoutes');
const router = express.Router();
const userController =require( '../controllers/userController');


router.post("/createUser",async (req,res)=>{

    try{
        console.log('create User - route');

        await userController.createUser(req,res);


    }catch(err){
        return res.status(500).json({
            msg: "error occured"
        })
    }

});

router.get('/allUsers',async(req,res)=>{

    try{
        console.log('get Users - route');

        const users= await userController.getAllUsers(req,res);

        return res.status(200).json({
            users
        })


    }catch(err){
        return res.status(500).json({
            msg: "error occured"
        })
    }

});


module.exports = router

