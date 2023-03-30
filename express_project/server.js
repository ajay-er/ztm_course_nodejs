const express = require('express');

const app = express();

const  PORT = 3001 ; 

const friends = [{
    id:0,
    name:"Sir Ajay"
},
{
    id:1,
    name:'Albert Einstein'
},
]

app.get('/friends',(req,res)=>{
    res.json(friends);
});


app.get('/friends/:FriendId',(req,res)=>{
    const FriendId = Number(req.params.FriendId);
    const friend = friends[FriendId];
    if(friend){//if frined undefined --this is not going to work because it is falsy value
        res.json(friend);
        // 🔼default is status code 200 if we want to send explicitly then we can use🔽
        //! res.status(200).json(friend);
    }else{//? /frineds/22
        //even it is error good practice returning json object
        res.status(404).json({
            error:"Friend does not exist"
        })
    }
})

app.get('/messages',(req,res)=>{
    res.send('<ul><li><h1>Am genious</h1></ul></li>');
});

app.post('/messages',(req,res)=>{
    console.log('updataing messages...');
});

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`);
})