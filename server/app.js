const express = require('express')
const { default: mongoose } = require('mongoose')
const teacherRouter=require('./route/teacherRoute')
const app =express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("thes is get")
})
app.use('/teacher', teacherRouter)
module.exports= app;