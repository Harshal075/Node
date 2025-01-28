const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        os:String,
        size:Number
    }
);

const productModel = mongoose.model('products',ProductSchema);
module.exports = productModel;