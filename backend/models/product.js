import mongoose from "mongoose";


const product = new mongoose.Schema({
    name :{
        type : String ,
        required : true
    } , 
    price : {
        type  :Number ,
        required : true
    } ,
    image :{ 
        type :String ,
        required :true
    } ,
    AdminId : {
        type : mongoose.Schema.Types.ObjectId  ,
        ref :"Admin" ,
        required : true 
    }
} , {
    timestamps : true // will store the values of when created and updated 
}
)

const Product =mongoose.model("Product" ,product) ;

export default Product ;