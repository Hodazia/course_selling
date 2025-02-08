/*
creating route handlers - 4 
one with express routing and without routing

 */

const express = require("express");
const app = express(); //create an instance of express http server

app.post("/user/signup", function(req,res) {
    res.json({message:"Send the credentials"});
})

app.post("/user/signin", function(req,res){
    res.json({message:"Sign in credentials"});
})

//what all courses i have purchased
app.get("/user/purchases", function(req,res){
    res.json({message:"USers course purchased"});
})

app.post("/user/course", function(req,res){
    // u would expect the user to buy money in the real world, but we won't go that accepting money
    res.json({message:"Courses"});
})

app.get("/courses", function(req,res){
    res.json({message:"Courses for anyone visiting the endpoint"});
    
})


app.listen(3000);
