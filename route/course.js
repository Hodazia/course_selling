
const { Router } = require("express");

const courseRouter = Router();


courseRoute.post("/user/course", function(req,res){
    // u would expect the user to buy money in the real world, but we won't go that accepting money
    res.json({message:"Courses"});
})

courseRoute.get("/courses", function(req,res){
    res.json({message:"Courses for anyone visiting the endpoint"});
    
})

module.exports = {
    courseRouter: courseRouter
}

