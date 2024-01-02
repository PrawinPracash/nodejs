

const User =require("../models/User");

class userDao{

    
    async createUser(data){

        try{
            console.log('create User - Dao');
            const user=await User.create({
                name: data.name,
                email: data.email,
                password: data.password,
                age: data.age ? data.age: null
            });

            return user;

        }catch(err){
            return err;
        }

    }

    async getAllUsers(){

        try{
            console.log("Dao - all user")
            const users= await User.find();
            return users

        }catch(err){
            return err;
        }

    }

}

module.exports= new userDao();
