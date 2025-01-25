const express = require('express');
const dbConnect = require('../mongodb');

const app = express();
app.use(express.json());
app.get('/' , async (req , res)=>{
    let data = await dbConnect('Database1' , 'Products');
    data = await data.find().toArray();
    res.send(data);
})

app.post('/',(req , res)=>{
    console.log(req.body);
    res.send({name:"anil"});
})

app.listen(4500);