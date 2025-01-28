const express = require('express');
const EventEmitter = require('events');
const event = new EventEmitter();
const app = express();

//lets create event to count number of time api called
let Homecount = 0;
let aboutcount = 0;
let contactcount = 0;

event.on("aboutcount" , ()=>{
    aboutcount++;
    console.log("about count"+aboutcount);
})

event.on("Homecount" , ()=>{
    Homecount++;
    console.log("Home Count " + Homecount);
})

event.on("contactcount" , ()=>{
    contactcount++;
    console.log("contact count " + contactcount);
})


app.get('/' , (req , res)=>{
    res.send('API called');
    event.emit('Homecount');
})

app.get('/about' , (req , res)=>{
    res.send('API called');
    event.emit('aboutcount');
})

app.get('/contact' , (req , res)=>{
    res.send('API called');
    event.emit('contactcount');
})

app.listen(4500);