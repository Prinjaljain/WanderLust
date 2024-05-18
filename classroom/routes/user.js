const express=require("express");
const router=express.Router();
//users
router.get("/",(req,res)=>{
    res.send("USER PAGE");
});
router.get("/:id",(req,res)=>{
    res.send("USER KI ID");
});
router.post("/",(req,res)=>{
    res.send("POST OF USERS");
});
router.delete("/:id",(req,res)=>{
    res.send("USER is no MORE");
});
module.exports=router;