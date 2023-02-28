/**
 * This is the starting point of the application.
 */

const express = require("express");
const app = express();

/**
 * 
 * if NODE_ENV is not production.
 * setting the congiguration data in process.env ; 
 * 
 */

require('./config');

/**
 * body-parser
 */
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.text());
app.use(bp.urlencoded({extended : true}));


/**
 * 
 * making a connection to DB.
 * 
 * 
 * it is more reliable (bettwe way) of connecting to MongoDB.
 */
const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL);
const database = mongoose.connection;
database.on("error",()=>{
    console.log("Error while connecting to MongoDB.");
});
database.once("open",()=>{
    console.log("app is connected to the database.");
});

/**
 * routes 
 */

require('./routes/user.route')(app);
require('./routes/mail.route')(app);

/**
 * Running the application
 */
app.listen(process.env.PORT,()=>{
    console.log("server started running on port number : ",process.env.PORT);
})