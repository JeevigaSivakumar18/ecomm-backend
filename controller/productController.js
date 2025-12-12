const prod = require('../models/productModel');

const addProd = async(req,res) => {
    try{
        const newProd = new prod({
            id : req.body.id,
            name : req.body.name,
            price : req.body.price,
            type : req.body.type,
            review : req.body.review
        });
        await newProd.save();
        res.status(200).json({message : "Product added successfully"});
        console.log(newProd)
    }catch(err){
        res.status(500).json({message : "Error adding to cart",error : err});
    }
}

const getAllProd = async(req,res) => {
    try {
        const newprod = await prod.find();
        res.status(200).json(newprod);
    }catch(err){
            res.status(500).json({message : " error getting product"});
    }
};

const Searchprod = async(req,res) => {
    try{
        const prod1 = await prod.findById(req.params.id);
        if(!prod1){
            res.status(404).json({message : "product not found"});
        }else{
            res.status(200).json(prod1);
        }
    }catch(err){
        res.status(500).json({message : "Error fetching from server"});
    }
}


const deleteprod = async(req,res) =>{
    try{
        const deleteprod = await prod.findByIdAndDelete(req.params.id);
        if(!deleteprod){
             res.status(404).json({message : "product not found"});
        }else{
        res.status(201).json({message:"product deleted sucessfully"});
    }
}catch(err){
        res.status(500).json({
            message:"Error deleting product", error : err});
        }
    }

module.exports = {
    addProd,
    getAllProd,
    Searchprod,
    deleteprod
}


