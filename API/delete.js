const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('../mongodb');
const app = express();
app.use(express.json());

app.delete('/:id' , async(req , res)=>{
    console.log(req.params.id);
    const db = await dbConnect('Database1','Customers');
    const result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    console.log(result);
    res.send(result);
})
app.listen(4500);