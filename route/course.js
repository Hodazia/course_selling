
const { Router } = require("express");

const courseRouter = Router();


courseRouter.post("/purchase", function(req,res){
    // u would expect the user to buy money in the real world, but we won't go that accepting money
    res.json({message:"Courses"});
})

courseRouter.get("/preview", function(req,res){
    res.json({message:"Courses for anyone visiting the endpoint"});
    
})

module.exports = {
    courseRouter: courseRouter
}

