import Inventory from "../models/inventoryModel.js";

export const createInventory=async(req,res)=>{

    try {
        const { productName,productCategory,productDescription,productQuantity, productPrice } = req.body;
        if (!productName || !productCategory ||!productDescription ||!productQuantity || !productPrice) {
          return res.json({
            message: "All fields are required",
          });
        }

        const inventory=await Inventory.create({
       productName,productCategory,productDescription,productQuantity, productPrice
        })
        res.json({
            message:"Product added to inventory successfully",
            data:inventory
        })
    }
    catch(error){
      res.json(error.message);
    }
}

export const getInventory=async(req,res)=>{
  try {
     const inventory=await Inventory.find()
      res.json({
        message:"Product fetched successfully!",
            data:user

      })
  } catch (error) {
     res.json(error.message);
  }
}


export const getByIdInventory=async(req,res)=>{
    try {
       const inventory=await Inventory.findById(req.params.id)
       res.json({
         message:"Product fetched successfully!",
            data:user
       })
    } catch (error) {
         res.json(error.message);
    }
}


export const updateInventory=async(req,res)=>{
    try {
        const inventory=await Inventory.findByIdAndUpdate(req.params.id,req.body,{
          new:true
        })
       res.json({
         message:"Product updated successfully!",
            data:inventory
       })
    } catch (error) {
         res.json(error.message);
    }
}


export const deleteInventory=async(req,res)=>{
  try {
     const inventory=await Inventory.findByIdAndDelete(req.params.id)
       res.json({
         message:"Product deleted successfully!",
            
       })
  } catch (error) {
       res.json(error.message);
  }   
}