const express = require('express');
require('./config');
const products = require('./products');

const app = express();
app.use(express.json());

app.get('/search/:key',async (req , res)=>{
    
    let data = await products.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"os":{$regex:req.params.key}}
            ]
        }
    )
    console.log(data);
    res.send(data);
})

app.listen(4500);