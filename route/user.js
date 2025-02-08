const { Router } = require("express");

const UserRouter = Router();



UserRouter.post("/signup", function(req,res) {
    res.json({message:"Send the credentials"});
})

UserRouter.post("/signin", function(req,res){
    res.json({message:"Sign in credentials"});
})

    //what all courses i have purchased
UserRouter.get("/purchases", function(req,res){
    res.json({message:"USers course purchased"});
})


module.exports = {
    UserRouter: UserRouter
}