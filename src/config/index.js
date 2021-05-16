
require('dotenv').config();
const express= require('express');
const app = express();

// database configration
require('./database');


app.listen(process.env.PORT,console.log(`server run on port ${process.env.PORT}`));