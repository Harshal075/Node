const express = require('express');
const con = require('./connect');
const app = express();
app.use(express.json());


app.put('/:id' , (req , res)=>{
    const data = [req.body.name , req.body.price , req.params.id];
    con.query("update Products set name = ? , price = ? where id = ?" , data , (error , result)=>{
        if(error) res.send(error);
        else res.send(result);
    })
})

app.listen(4500);