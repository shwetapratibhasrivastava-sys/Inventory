import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectdb from "../Inventory_/config/db.js"
import authRoute from "./routes/authRoute.js"
import inventoryRoute from "./routes/inventoryRoute.js"


dotenv.config()

const app=express()
connectdb()

const PORT=process.env.PORT


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    return res.json("Api is running")
})

app.use("/api/auth",authRoute)
app.use("/api/inventory",inventoryRoute)


app.listen(PORT,()=>{
    return console.log(`server is running on PORT ${PORT}`)
})