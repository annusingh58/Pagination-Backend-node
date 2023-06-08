import express from "express";

import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/UserRoutes.js";




const app =express();

app.use(morgan('dev'));
app .use(express.json());

app.use('/api/v3',router);
mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/pagination')


.then(()=>console.log("db is  connected"))
.catch((error)=> console.log("db error =>",err))

app.listen(9001,()=> console.log ("working on 6000"))