const http = require("http");

const app = require("./app");
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require("./models/planets.model");
   
const PORT = process.env.PORT || 8000;

const server = http.createServer(app); //another way of creating express server which is little bit more flexible || organize

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
//.....
