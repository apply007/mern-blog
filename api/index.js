import express from 'express'
import dotenv from 'dotenv'

const app=express()


app.listen(process.env.PORT,(req,res)=>{
console.log("Server is ready and running at port 3000!!!")

})