const express = require('express');
const app = express();
const dotenv = require('dotenv');
mongoose = require('mongoose');

dotenv.config();

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//connect to DB 
mongoose.connect(
    process.env.DB_CONNECT, 
    ()=> console.log('connected to db')
);

//Middleware
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

app.listen(8000, ()=> console.log('Server online'));

