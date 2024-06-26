// const express = require('express')
// const { default: mongoose } = require('mongoose')
// const teacherRouter=require('./route/teacherRoute')
// const app =express()


// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send("thes is get")
// })
// app.use('/teacher', teacherRouter)
// module.exports= app;
// api/data.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Replace with your MongoDB connection string
const MONGODB_URI = 'mongodb+srv://fhbashkona:fhb134042@fhb.csonyla.mongodb.net/fhb?retryWrites=true&w=majority&appName=fhb';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema and a model (example)
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: String,
  age: Number
});
const ExampleModel = mongoose.model('Example', exampleSchema);

// Express route to fetch data
app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from MongoDB
    const data = await ExampleModel.find(); // Example: fetch all documents from 'Example' collection
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export the express app instance for Vercel serverless functions
module.exports = app;
