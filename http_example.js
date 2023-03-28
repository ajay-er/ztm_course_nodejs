const http = require("http");
//* we can also use the object destructuring technique instead of the above one

//const { request } = require("http");

// const req = request("http://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Data chunk: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("No more data");
//   });
// });

// req.end();




//*we can use get funtion instead of request function.In get function no need to end.

const { get } = require("http");

get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});
