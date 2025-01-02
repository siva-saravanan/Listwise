import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set)=>({
    products : []  , // initializing the state 
    setProducts : (products) => set({products})  ,  // actions : update the products array whenver it is changed 
    createProduct : async (newProduct ,token) =>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return { success : false , message  : "please fill all the details "} ;

        }
        

        //axios
       try{
        const response = await axios.post("http://localhost:5000/api/products" ,
            { 
                "name" : newProduct.name , 
                "price" : newProduct.price ,
                "image" : newProduct.image ,
            },{
                headers :{
                    Authorization : "Bearer "+token
                } 
            }
           

            
        ) ; 
        const data = response.data ;
        set((state)=> ({products : [...state.products ,data.data]})) ; //here only the new item is addded to the array
        return { success : true , message  : "product created sucessfully "} ;
       }
       catch(error){
        return {success :false , message : "product not added "} ;
       }


    }  , 
    fetchProduct : async (token)=>{


        try{
            const response =await axios.get("http://localhost:5000/api/products" ,{
                headers :{
                    Authorization : "Bearer "+token
                }
            })

            const data= response.data.data;
            set({products :data}) ; 
            return {sucess :true , message:"prodducts fetched"} // here whole is list repolaced by the new ones from the DB

        }catch(err){
            return {sucess :false , message:"prodducts cannot be fetched"}
        }
        

    } ,

        deleteProduct : async (pid ,token)=>{
        
                const response = await axios.delete(`http://localhost:5000/api/products/${pid}` ,{
                    headers :{
                        Authorization : "Bearer "+token
                    }
                }) ;
                const data = response.data ; 
                if(!(data.success)) return { success : false , message : data.message}

                //if succes 

            // to change the ui  we have to ree render the state immediately 
                set((state)=>({ 
                    products : state.products.filter(

                        (product) =>String(product._id) !== String(pid) // this filter function will ony renders the id which is not matching with pid which means all except the deleted one

                    )
                    

                })) ;
                



                return { success : true , message : data.message} ;



        }

,   
    updateProduct : async (id , updatedproduct ,token)=>{


        try{
            const response = await axios.put(`http://localhost:5000/api/products/${id}` , {
                "name": updatedproduct.name , 
                "price" :updatedproduct.price ,
                "image" : updatedproduct.image
            } ,{
                headers :{
                    Authorization : "Bearer "+token
                } 
            }
            ) ; 
    
            const data = response.data.data ;
            set((state)=> ({
                products : state.products.map(
               (product)=>(product._id === id ? data : product)
            )}))
            return {success :true , message :"product updation done"}

        }
        catch(error){
            return {success :false , message :"product updation failed"}
        }
        
        


    }

}));