const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// const productRoutes = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');
const itemRoutes = require('./src/routes/items');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// app.use('/', productRoutes);
app.use('/auth', authRoutes);
app.use('/item', itemRoutes);

app.use((error, req, res, next) => {
    const status = error.errosStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

mongoose.connect('mongodb+srv://raditya:8jVqpZv5mkoNYgIc@rfid-api.lzm4hke.mongodb.net/?retryWrites=true&w=majority&appName=rfid-api')
.then(() => {
    app.listen(4000, () => console.log('connection success'));
})
.catch(err => console.log(err));

