const express = require("express");
const app = express();
const con = require('./connect');

app.get('/', (req, res) => {
    con.query("select * from Products", (err, result) => {
        if (!err) {
            res.send(result)
        }
        else {
            res.send(err)
        }
    })
})

app.listen(4500);