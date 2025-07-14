//require("dotenv").config();  //code consitency is bad practice

import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

 dotenv.config({
    path: "./.env"
 });

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    })
})
.catch((error) => {
    console.error(` MongoDB connection Failed ${error.message}`);
    process.exit(1); // Exit the process with failure
});



/*
import express from "express";
const app = express();

// iife funcation is alway start with semicolon only for cleaning up the code 

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error(`Server error: ${err.message}`);
        });
app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        }
        )
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
        
    }
})()
*/


