import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data: products});
    } catch (error) {
        console.log("Error in fetching all products ")
        res.status(500).json({success:false,message:"Internal server error"})
    }
}

export const updateProduct = async(req,res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,message:"Product updated"})
    } catch (error) {
        res.status(500).json({success:false,message:"internal server error "})
    }
}

export const addProduct = async (req,res)=>{
    const product = req.body;   // sends the data in body  

    if(!product.name || !product.price || !product.image){
        return res.send(400).json({success:false,message:"Please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct})
    } catch (error) {
        console.error("error in create product ",error.message)
        res.status(500).json({success:false,message:"server error"})
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"});
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}