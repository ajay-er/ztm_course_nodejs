// const Makerequest  = require('./request');
// const Makeresponse = require('./response');

// function request(url,data){
//     Makerequest.send(url,data);
//     return Makeresponse.read();
// }


// const responseData = request('https://google.com',"hello"); 

// console.log(responseData); 





// //* above problem using object destructuring 
// const {send}  = require('./request');
// const {read} = require('./response');

// function request(url,data){
//     send(url,data);
//     return read();
// }

// const responseData = request('https://google.com',"hello"); 

// console.log(responseData); 





//* above problem using ECMAscript import and export 

/* but here this code isn't going to work because we need to change 
   extension to .mjs or set "type": "module" in the package.json.
*/

import {send}  from './request';
import {read}  from './response';

function request(url,data){
    send(url,data);
    return read();
}

const responseData = request('https://google.com',"hello"); 

console.log(responseData); 


