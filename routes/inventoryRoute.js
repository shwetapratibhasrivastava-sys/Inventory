import express from "express"
import { createInventory, deleteInventory, getByIdInventory, getInventory, updateInventory } from "../controllers/inventoryController"
import authMiddleWare from "../middleware/authMiddleware.js"
const inventoryRoute=express.Router()


inventoryRoute.post("/create",authMiddleWare,createInventory)
inventoryRoute.get("/get",authMiddleWare,getInventory)
inventoryRoute.get("/get/:id",authMiddleWare,getByIdInventory)
inventoryRoute.put("/update/:id",authMiddleWare,updateInventory)
inventoryRoute.delete("/delete/:id",authMiddleWare,deleteInventory)


export default inventoryRoute