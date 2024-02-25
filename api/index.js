import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'
const app=express()



dotenv.config()

app.use(express.json())

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
app.use("/api/auth",authRoute)
})


