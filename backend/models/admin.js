import mongoose from "mongoose";

const AdminSchema  = new mongoose.Schema({
    FirstName  : {
        type : String ,
        required : true 
    } ,
    LastName  : {
        type : String   , 
        required : true 
    } ,
    UserName :{
        type : String  ,
        required : true , 
        unique : true  ,
        minLength : 3 , 
        maxLength  : 50 ,
        trim : true 
        
    } ,
    PassWord : {
        type : String ,
        required :  true  , 
        unique : true ,
        minLength : 3 ,
        maxLength : 50  ,
        trim : true
    }
})


// model creation 
const Admin = mongoose.model("Admin" ,AdminSchema) ; 

export default Admin ;  