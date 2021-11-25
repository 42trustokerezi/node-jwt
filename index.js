const express = require('express');
const app = express();
mongoose = require('mongoose');

//connect to DB 
mongoose.connect('mongodb://localhost/node-auth', ()=> console.log('connected to db'));

//Import Routes
const authRoute = require('./routes/auth');

//Route middlewares
app.use('/api/user', authRoute)

app.listen(8000, ()=> console.log('Server online'));

