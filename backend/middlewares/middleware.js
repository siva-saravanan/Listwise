// json webtoken used to generate the web tokens to move and fro btw sites pages preventing login and each step

import JWT_SECRET from "../config/config.js";

import jwt from "jsonwebtoken"





const AuthMiddlware = (req,res,next)=>{
    const AuthHead = req.headers.authorization ; 

    if(!AuthHead || !AuthHead.startsWith('Bearer ')){
        return res.status(500).json({
            success : false ,
            message : "authorization failed on middleware"
        })
    }

    const token = AuthHead.split(' ')[1] ;
    try{
        const decoded = jwt.verify(token , JWT_SECRET); 
        req.AdminId = decoded.AdminId ; 
        next() ; 
    }catch{
        return res.status(500).json({
            success : false ,
            message : "authorization failed due to invalid token "
        })
        
    }


}

export default AuthMiddlware  ; 