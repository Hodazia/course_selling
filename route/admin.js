const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function(req,res) {
    res.json({message:"Send the credentials"});
})

adminRouter.post("/signin", function(req,res){
    res.json({message:"Sign in credentials"});
})

adminRouter.post("/course", function(req,res) {
    res.json({message:"Send the credentials"});
})


adminRouter.put("/course", function(req,res) {
    res.json({message:"Send the credentials"});
})


adminRouter.get("/course/bulk", function(req,res) {
    res.json({message:"Send the credentials"});
})


module.exports = {
    adminRouter: adminRouter
}
