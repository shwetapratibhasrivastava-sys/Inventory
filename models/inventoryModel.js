import mongoose from "mongoose";


const inventorySchema=new mongoose.Schema(
    {
     productName:{
        type:String,
        required:true,
     },
     productCategory:{
        type:String,
        required:true,
     },
     productDescription:{
        type:String,
        required:true
     },
     productQuantity:{
        type:Number,
        required:true,
     },
      productPrice:{
        type:String,
        required:true,
     },
    },{
        timestamps:true
    }
)


const Inventory=mongoose.model("Inventory",inventorySchema)
export default Inventory