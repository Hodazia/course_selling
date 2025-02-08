/*
creating route handlers - 4 
one with express routing and without routing

 */

const express = require("express");
const app = express(); //create an instance of express http server
const {createUserRoutes } = require("./route/user");
const {createcourse} = require("./route/course")


/* use express router
anything that goes to /user router will be handled by the UserRouter,

 */
app.use("/user",UserRouter);
app.use("/course",courseRouter);

createUserRoutes(app);
createcourse(app);

app.listen(3000);
