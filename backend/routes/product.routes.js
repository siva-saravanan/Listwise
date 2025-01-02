import express from "express";
import { createProducts, deleteProducts, getAllProducts, updateProducts } from "../controller/product.controller.js";
import AuthMiddlware from "../middlewares/middleware.js";

const ProductRoute =express() ; 

ProductRoute.post("/" , AuthMiddlware,createProducts)
ProductRoute.get("/" , AuthMiddlware,getAllProducts)
ProductRoute.put("/:id" ,AuthMiddlware ,updateProducts)
ProductRoute.delete("/:id" ,AuthMiddlware, deleteProducts )


export default ProductRoute ;