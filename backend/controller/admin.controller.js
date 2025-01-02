import Admin from "../models/admin.js";
import zod  from "zod"


import JWT_SECRET from "../config/config.js";
import jwt from "jsonwebtoken"




const SignupBody = zod.object({
    FirstName : zod.string() , 
    LastName  :  zod.string() ,
    UserName : zod.string().email() ,
    PassWord : zod.string()
})

const SigninBody = zod.object({
    UserName : zod.string().email() ,
    PassWord : zod.string()
})



export const AdminSignin = async(req,res)=>{
    const body = req.body ;
    const {success} =  SigninBody.safeParse(body) ; 

    if(!success){
        res.status(500).json({
            success : false , 
            message : "invalid inputs"
        })
    }


    const UserName= body.UserName ;

    const existinguser = await Admin.findOne({UserName : UserName}) ;

    if(!existinguser){
        res.status(500).json({
            success : false , 
            message : "User not found"
        })
    }
     // if found na i have to jwt token 

    const AdminId = existinguser._id ; 
    const token = jwt.sign({AdminId} ,JWT_SECRET)  ;
    res.status(200).json({
        success : true  , 
        data : token
    })

} ;


export const AdminSignup = async(req,res)=>{
    const body = req.body  ;
    const {success} = SignupBody.safeParse(body) ;
    if(!success){
        res.status(500).json({
            success : false , 
            message : "invalid inputs"
        })
    }
    const existinguser = await Admin.findOne({UserName:body.UserName  }) ; 
    if(existinguser){
        res.status(411).json({
             success : false , 
            message : "Email already taken"
        })
    }
    //if success also i have to create 


    const newuser =  new Admin(body) ;

    try{
        const newAdmin = await newuser.save() ;

        const AdminId = newAdmin._id  ; 
        const token = jwt.sign({AdminId} , JWT_SECRET) ; 

        return res.status(200).json({
            success : true  , 
            data : token ,

        })
    }catch(error){
        return res.status(500).json({
            success : false  , 
            message : "user cannot be created" ,

        })
    }

}