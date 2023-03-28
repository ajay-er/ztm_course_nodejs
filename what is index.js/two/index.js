//here am using the folder named 'two' as a module. in normal we can't use a folder as a 
// module.But here index.js act as a exporting helper and it is helps to convert the folder to a module
//with index.js  we dont want to target sub modules(group of modules  ) in our directory.

// module.exports = {
//     three:require('./three')
// }



 //? other way
// const file = require('./three.js');
// module.exports = {
//     myFunction : file.myFunction
// }


//! third way ----> spread operator
module.exports = {
    ...require('./three')
}