const Kart =require("../models/Product.model")

const KartController={
    getAll:async(req,res)=>{
        try{
            const card= await Kart.find()
            res.status(200).send(card)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await Kart.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Kart.findByIdAndDelete(id)
            const card=await Kart.find({})
            res.send(card)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,title,price}=req.body
            const newKart=new Kart({image,title,price})
            await newKart.save()
            res.status(201).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }

    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{image,title,price}=req.body
            await Kart.findByIdAndUpdate(id,{image,title,price})
            res.status(200).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=KartController