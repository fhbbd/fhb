

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const teacherRouter = require('./route/teacherRoute')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api/teacher',teacherRouter)

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
app.post('/api/data', async (req, res) => {
    try {
        const { name, age } = req.body;
    
        // Create a new document instance from the request body
        const newExample = new ExampleModel({
          name,
          age
        });
    
        // Save the document to MongoDB
        await newExample.save();
    
        res.status(201).json(newExample);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Export the express app instance for Vercel serverless functions
module.exports = app;
