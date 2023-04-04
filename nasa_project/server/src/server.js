const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const MONGO_URL =
  "mongodb+srv://nasa-api:wy8EGqI4QJK3rWjd@nasacluster.bmnatmd.mongodb.net/nasa?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app); //another way of creating express server which is little bit more flexible || organize

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    //if we dont specify these optional options we get some deprecations warnings in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
//.....
