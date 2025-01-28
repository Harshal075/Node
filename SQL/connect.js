const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"Database1"
})

con.connect((err)=>{
    if(err)
    {
        console(err);
    }
    else
    {
        console.log("Connected");
    }
})
module.exports = con;
