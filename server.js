import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose .connect(process.env.mongoConnection);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temp');

app.listen(process.env.port , ()=>{
    
    console.log('Started app on http://localhost:${process.env.port}');
});
