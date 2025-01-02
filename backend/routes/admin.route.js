import express from "express"
import { AdminSignin  ,AdminSignup} from "../controller/admin.controller.js";
const AdminRoute = express() ;


AdminRoute.post("/signin" , AdminSignin )
AdminRoute.post("/signup" , AdminSignup)

export default AdminRoute ; 
