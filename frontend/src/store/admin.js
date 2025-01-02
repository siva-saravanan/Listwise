import axios from "axios";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { data, useNavigate } from "react-router-dom";
import { create } from "zustand";


export const adminstore = create((set)=>({
    signupAdmin  : async(newAdmin ,token) =>{
  
           
        try{

            const response = await axios.post("http://localhost:5000/api/admin/signup" , {
                FirstName : newAdmin.FirstName , 
                LastName : newAdmin.LastName, 
                UserName :  newAdmin.UserName ,
                PassWord :  newAdmin.PassWord
            })

            const data = response.data ; 
            // we have to store the token in local storage 
            if(token){
                localStorage.removeItem("token") ; 
            }
            localStorage.setItem("token" , data.data) ; 
            return{
                success :true , 
                message : "Signup successfully"
            }
        
           


        }
        catch(error){
            return{
                success :false , 
                message : "Signup error"
            }
        }
        
        
    }

,
    siginAdmin :  async(existAdmin ,token) =>{
        try{
            const response =  await axios.post("http://localhost:5000/api/admin/signin" , {
                UserName : existAdmin.UserName ,
                PassWord :existAdmin.PassWord

            } 
        )

            const data = response.data ; 
            // we have to store the token in local storage 
            if(token){
                localStorage.removeItem("token") ; 
            }
            localStorage.setItem("token" , data.data) ; 
            return{
                success :true , 
                message : "Signup successfully"
            }

            
        }
        catch(err){
            return{
                success :false , 
                message : "Signin error"
            }
        }
    }
}))

