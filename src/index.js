// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path:'./env'
})

console.log(`port ${process.env.PORT}`);

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log(`server is runing on port${process.env.PORT}`);
    })

    app.on("error",(error)=>{
        console.log('Error::',error);
        throw error;
    })
}).catch((error)=>{
    console.log("Mongo db connection failed !!",error);
})


/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("Error",(error)=>{
            console.log('Error::',error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error::",error);
        throw error;
    }
})() */