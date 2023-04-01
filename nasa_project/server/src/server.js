const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);//another way of creating express server which is little bit more flexible || organize

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
