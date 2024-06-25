const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
});

// Create a new product
app.post('/api/products', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get all products
app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get a single product by id
app.get('/api/products/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Update a product by id
app.put('/api/products/:id', async(req, res) => {
    try {
        const product = await
        Product.findByIdAndUpdate(req,params.id, req.body, {new: true});
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a product by id
app.delete('/api/products/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete all products
app.delete('/api/products', async(req, res) => {
    try {
        const product = await Product.deleteMany();
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


mongoose.connect("mongodb+srv://mojeeb:028611@backend.xuadgug.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(() => {
  console.log('Connected to the database!');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch(() => {
  console.log('Connection failed!');
});