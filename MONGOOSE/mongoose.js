const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://patilharshal:Harshal%407523@cluster0.o4exb.mongodb.net/Database1");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    os: String,
    size: Number
})



const saveInDB = async () => {

    const productModel = mongoose.model("products", ProductSchema);
    let data = new productModel({ name: "Iphone 17", price: 25000, os: 'ios', size: 5.11 });
    let result = await data.save();
    console.log(result);

}

// saveInDB();

const updateDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne(
        { price: 25000 },
        { $set: { size: 6 } }
    );
    console.log(data);
}
// updateDB();

const deleteDb=async()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.deleteMany({name:'Iphone 17'});
    console.log(data);
}
// deleteDb();

const findDb=async()=>{
    const ProductModel = mongoose.model('Products',ProductSchema);
    let data = await ProductModel.find({size:6});
    console.log(data);
}
findDb();

