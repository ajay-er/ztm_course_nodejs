 const EventEmitter = require('events');

 const celebrity = new EventEmitter();//celebrity emitts diffrent events from their life

// Subcribe to celebrity for observer 1 
celebrity.on('race win',()=>{
    console.log('congratulations! You are the best!');
}); 

// Subcribe to celebrity for observer 2
celebrity.on('race win',()=>{
    console.log('Boo I could have done better than that!');
}); 


// Subcribe to celebrity for observer 3
celebrity.on('race lost',()=>{
    console.log('Its ok..maybe next time..you are always best');
}); 


process.on('exit',(code) =>{
    console.log('Process exit event with code:',code);
})

celebrity.emit('race win');
// celebrity.emit('race lost');
// celebrity.emit('race win');
 












