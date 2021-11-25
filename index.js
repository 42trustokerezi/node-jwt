const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

app.listen(9000, ()=> console.log('Server online'));

