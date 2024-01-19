const express=require("express")
const router=express.Router()
const KartController=require("../controller/Product.controller")

router.get("/",KartController.getAll)
router.get("/:id",KartController.getById)
router.delete("/:id",KartController.delete)
router.post("/",KartController.add)
router.put("/;id",KartController.edit)
module.exports=router