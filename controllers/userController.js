
const userDao = require("../daos/userDao");

class userController{
    
    async createUser(req,res){

        try{     

            if(req.body.password != req.body.confirmPassword){
                return res.status(500).json({
                    msg: "password incorrect"
                })
            }
            console.log('create User - controller');
            const user= await userDao.createUser({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              age: req.body.age
            });

            return res.status(200).json({
                createdUser: user
            })

        }catch(err){
            return err;
        }

    }

    async getAllUsers(req,res){
        try{     
            console.log('get Users - controller');
            const users= await userDao.getAllUsers();
            return users;
        }catch(err){
            return err;
        }
    }

}

module.exports= new userController();
