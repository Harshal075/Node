const express = require('express');
const multer = require('multer');
const app = express();

const uploads = multer({
    storage:multer.diskStorage({
        destination:function(req , file , cb){
            cb(null , 'file_uploaded');
        },
        filename:function(req , file , cb){
            cb(null , file.filename + '7' + '.jpg')
        }
    })
}).single("now")

app.post('/upload', uploads ,(req , res)=>{
    res.send('Done');
})

app.listen(4500);