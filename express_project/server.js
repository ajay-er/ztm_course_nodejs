const express = require('express');

const app = express();

const  PORT = 3001 ; 

app.get('/',(req,res)=>{
    res.send({
        id:0,
        name:"Sir Ajay"
    });
});

app.get('/messages',(req,res)=>{
    res.send('<ul><li><h1>Am genious</h1></ul></li>');
});

app.post('/messages',(req,res)=>{
    console.log('updataing messages...');
});

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`);
})