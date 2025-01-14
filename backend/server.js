// const express = require('express')    traditional process
import express from "express";   // latest using import 
import dotenv from 'dotenv';

import path, { resolve } from "path";
import { connectDB } from "./config/db.js";
import productRoutes from './routes/product.route.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

const __dirname = path.resolve();
app.use(express.json()); // to allow json data in the body

app.use('/api/products',productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`)
})