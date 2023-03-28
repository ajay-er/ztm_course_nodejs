const axios = require('axios');
//axios works in both browser and node.js
//in node it will use the "http" module... | in the browser it will use "XMLHttpRequests" 

axios.get('https://www.google.com')
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
    .then(()=>{
        console.log('All done');
    })