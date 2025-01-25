// const http = require('http');
// const data = require('./app');
// http.createServer((req, res)=>{
//     res.writeHead(200 , {'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);
// console.log(process.argv[2])

// const fs = require('fs');
// const operation = process.argv[2];
// const name = process.argv[3];

 

// if(operation == 'create')
// {
//     const data = process.argv[4];
//     fs.writeFileSync(name , data);
// }
// if(operation == 'delete')
// {
//     fs.unlinkSync(name);
// }
 
// const fs = require('fs');
// const path = require('path');
// const dirpath = __dirname+'/files';

// for(i = 0 ; i < 5 ; i++)
// {
//     fs.writeFileSync(dirpath + '/hello' + i + '.txt' ,'i am bot' );
// } 

const express = require('express');
const path = require('path')
const reqF = require('./middleware.js')



const namefilter = reqF.namefilter;
const reqfilter = reqF.reqFilter;
const publicpath = path.join(__dirname , 'public')
// console.log(reqF);

const app = express();
app.set('view engine' , 'ejs');


// app.use(express.static(publicpath));
// console.log(publicpath);

// app.get('',(req , res)=>{
//     res.sendFile(`${publicpath}/index.html`);
// })

// app.get('/about',(req , res)=>{
//     res.sendFile(`${publicpath}/about.html`);
// })

// app.get('/help',(req , res)=>{
//     res.sendFile(`${publicpath}/help.html`);
// })



app.get('/' , (req , res)=>{
    res.render('home');
})

// const reqFilter = (req , res , next)=>{
//     if(!req.query.age)
//     {
//         res.send('Please Provide age in query param');
//     }
//     else{
//         next();
//     }
// }

// application level middleware
// app.use(reqFilter);

//apply middleware on single route
app.get('/profile' ,namefilter ,(req , res)=>{
    data = {
        name:'Harshal',
        email:'harshal@test.com',
        age:'21',
        skills:['cpp', 'java', 'node']
    }
    res.render('profile' , {data});
})

app.get('/contact' ,reqfilter, (req , res)=>{
    res.render('contact');
})

app.get('/help',(req , res)=>{
    res.render('help');
})

app.get('*',(req , res)=>{
    res.sendFile(`${publicpath}/notFound.html`)
})

app.listen(4500);



