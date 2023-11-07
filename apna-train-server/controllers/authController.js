import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupController=async(req  , resp)=>{

    const {username , email , password} = req.body;

   try {
    const hashedPassword = await bcrypt.hash(password,10);
    const user =  await new User({
        username:username,
        email : email,
        password : hashedPassword
    });

    const result = await user.save();
    resp.status(201).send({
        message : "user created Successfully",
        result
    })

   } catch (error) {
    resp.status(401).send({message : "Something went wrong"});
   }
    
   
  
}

export const loginController=async(req , resp)=>{

    

}