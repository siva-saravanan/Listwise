import express from "express" ;
import dotenv from "dotenv"
import { connectDB } from "./config/DB.js";
import Product from "./models/product.js";
import router from "./routes/router.js";
import cors from 'cors'
import path from "path"

dotenv.config() ;

/*
steps to merge the frontend and backend 
1.import path from the node folder 
2. __dirname using that will be done
3.making the dist folder from the frontend as the static folder in the backend to serve it 



*/
const app = express() ;
const PORT = process.env.PORT || 5000 ; 
const __dirname =path.resolve() ; 

app.use(cors()) ; 
app.use(express.json()) ; 
app.use("/api" ,router)

// basically making it to use frontend whenver it is in the production mode 
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist"))) ; 


    app.get('*' , (req,res)=>{
        //it basically says whatever the routes we hit other than /api/products/
        //it has to go to "__dirname"(which is root folder) then inside frontend -> dist -> index.html

        res.sendFile(path.resolve(__dirname , "frontend" , "dist" ,"index.html")) ; 
    });

}




app.listen(PORT ,()=>{ 
    connectDB() ;
    console.log("server  started at" , PORT) ;
})