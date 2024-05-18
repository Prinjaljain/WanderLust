const express=require("express");
const router=express.Router();
//posts
app.get("/",(req,res)=>{
    res.send("POST PAGE");
});
app.get("/:id",(req,res)=>{
    res.send("POST KI ID");
});
app.post("/",(req,res)=>{
    res.send("POST OF posts");
});
app.delete("/:id",(req,res)=>{
    res.send("POST is no MORE");
});

module.exports=router;