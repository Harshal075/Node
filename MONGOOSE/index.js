const express = require('express');
require('./config');
const products = require('./products');

const app = express();
app.use(express.json());
app.post('/contact',async(req , res)=>{
    console.log(req.body)
    let data = new products(req.body);
    const result = await data.save();
    res.send(result);
})

app.get('/list',async (req  , res)=>{
    let data =await products.find();
    res.send(data);
})

app.put('/update' , async(req ,res)=>{
    const result = await products.updateOne(
        {price:25000},
        {$set:{price:150000}}
    );
    res.send(result);
})

app.delete('/remove/:_id' , async(req , res)=>{
    const result = await products.deleteOne(req.params)
    res.send(result);
})

app.listen(4500);