const express = require('express');
const con = require('./connect');
const app = express();

app.delete('/:id',(req , res)=>{
    con.query('Delete from Products where id = ?' ,req.params.id , (error , result)=>{
        if(error) res.send(error);
        else res.send(result);
    })
})

app.listen(4500);