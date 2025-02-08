/*
creating route handlers - 4 
one with express routing and without routing

 */

const express = require("express");
const app = express(); //create an instance of express http server
const { UserRouter } = require("./route/user");
const { courseRouter } = require("./route/course");
const { adminRouter } = require("./route/admin");

/* use express router
anything that goes to /user router will be handled by the UserRouter,

 */
app.use("/user",UserRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);

//createUserRoutes(app);
//createcourse(app);

app.listen(3000);
