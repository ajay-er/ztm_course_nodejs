const {parse} = require('csv-parse');
const fs = require("fs");

const results = [];

//here we use parse to burffer to convert writable 
// ---> readable stream source to a writable stream destination.a stream that takes in data as suppose to giving u data; 
// kepler file is the source here,parse function is the destination for our pipe. 

fs.createReadStream("kepler_data.csv")
  .pipe(parse({
    comment:'#',
    coloums:true,
  }))
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err); 
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });

// parse();
