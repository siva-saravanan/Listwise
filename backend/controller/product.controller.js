import Product from "../models/product.js";


export const createProducts = async (req,res)=>{
    const product =  req.body ; //user will send this data 
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
        success :false  ,
        message : "please provide all the fields "})
    }

    


try{
   const newProduct = await Product.create({
    name  :product.name ,
    price :product.price ,
    image :product.image ,
    AdminId :req.AdminId

    }) ;
    return res.status(201).json({
       success :true  ,
        data  : newProduct
    });
}catch(error){
    console.error("error in product creation :", error.message) ;
    return res.status(500).json({
        success :false  ,
        message  :  error.message
    });
} 
} ; 

export const getAllProducts = async (req,res)=>{
    // to list down all the products 
    const AdminId = req.AdminId  ; 
    try {
        const products = await Product.find({AdminId :  AdminId}) ; //{ } => means fetch all the products in the AdminId  
        return res.status(200).json({
            success :true ,
            data : products
        })
    }catch(error){
        return res.status(500).json({
            success :false , 
            message :"error while fetching all the datas"
        })
    }
} ;


export const updateProducts = async(req,res)=>{
    const {id} = req.params ; 
    const product = req.body ; 
 
  
    try{
        const updateProduct = await Product.findByIdAndUpdate(id , product , {new :true} ) ; 
        //that new parameter will make you return the new upodated product if not give it will return the old product 
        return res.status(200).json({
            success : true  ,
            message : "updated sucessfully" ,
            data  : updateProduct
        })

    }catch(error){
        return res.status(500).json({
            success : false  ,
            message  : "error while updation"
        })
    }

} ;


export const deleteProducts =async (req, res)=>{ //alwasys req comes first then the res
    const {id} = req.params  ; 

    try{
        await Product.findByIdAndDelete(id) ; 
        return res.status(200).json({
            success :true ,
            message : "product deleted"
        })
    }
    catch(error){
        return res.status(500).json({
            success :false ,
            message : "error while deleting"
        }) 
    }
};