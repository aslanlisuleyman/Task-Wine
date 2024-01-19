const express=require("express")
require("dotenv").config()
const mongoose=require ("mongoose")
const cors=require("cors")
const KartRouter=require("./routes/Product.routes")
const app= express()
const PORT=process.env.PORT || 3011
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/start").then(res=>{
    console.log("app running")
})

app.use("/users",KartRouter)

app.listen(PORT,()=>{
    console.log("running Mongo DB")
})
