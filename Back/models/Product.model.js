const mongoose=require("mongoose")

const Kart=mongoose.model("Kart",new mongoose.Schema({

    image:String,
    title:String,
    price:Number
}))

module.exports= Kart