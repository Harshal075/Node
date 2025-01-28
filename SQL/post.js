const express = require('express');
const con = require('./connect');
const app = express();
app.use(express.json());

app.post('/' , (req , res)=>{
    const data = req.body;
    console.log(data);

    con.query("insert into Products SET ?" , data , (error , result,fields)=>{
        if(error) res.send(error);
        else res.send(result);
    })
})

app.listen(4500);