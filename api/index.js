import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'
import cookieParser from 'cookie-parser'

const app=express()



dotenv.config()

app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.DBCON)
.then(()=>{
    console.log("MongoDB is Connected")
}).catch((err)=>{
    console.log(err)
})


//
app.listen(process.env.PORT,(req,res)=>{
console.log("Server is ready and running at port 3000!!!")
})

//route
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

//MiddleWare
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500
    const message=err.message||"internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})
