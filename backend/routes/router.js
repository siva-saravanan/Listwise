import express from "express"
import ProductRoute from "./product.routes.js"
import AdminRoute from "./admin.route.js"
const router = express() ;

router.use('/products' , ProductRoute) ; 
router.use('/admin' , AdminRoute) ; 



export default router ; 