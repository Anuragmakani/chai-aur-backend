// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



// connectDB().then(()=>{
//     app.listen(3000,()=>{
//         console.log(`server is runing on port${process.env.PORT}`);
//     })

//     app.on("error",(error)=>{
//         console.log('Error::',error);
//         throw error;
//     })
// }).catch((error)=>{
//     console.log("Mongo db connection failed !!",error);
// })


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



// require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import connectDB from "./db/index.js";
// import {app} from './app.js'
// dotenv.config({
//     path: './.env'
// })














/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/