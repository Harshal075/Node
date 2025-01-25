const express = require('express');
const dbConnect = require('../mongodb');
const app = express();
app.use(express.json());

app.post('/',async (req , res)=>{
    console.log(req.body);
    const db =await dbConnect('Database1' , 'Customers');
    const result = await db.insertOne(req.body);
    res.send(result);
})

app.listen(4500);