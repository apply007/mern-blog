import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from '../api/routes/user.route.js'
const app=express()



dotenv.config()

mongoose.connect(process.env.DBCON)
.then(()=>{
    console.log("MongoDB is Connected")
}).catch((err)=>{
    console.log(err)
})


//
app.listen(process.env.PORT,(req,res)=>{
console.log("Server is ready and running at port 3000!!!")


app.use("/api/user",userRoute)
})


