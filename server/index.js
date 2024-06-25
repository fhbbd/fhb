require('dotenv').config()
const { default: mongoose } = require('mongoose')
const app = require('./app')
const PORT=process.env.PORT||5001



const connectDB = async () =>{
   await mongoose.connect('mongodb+srv://fhbashkona:fhb134042@fhb.csonyla.mongodb.net/fhb?retryWrites=true&w=majority&appName=fhb')
    console.log("db connected")
}


app.listen(PORT,()=>{
    console.log(`server is connected at the port of ${PORT}`)
    connectDB()
})
