const mongoose = require("mongoose");

const MONGO_URL ='mongodb+srv://nasa-api:wy8EGqI4QJK3rWjd@nasacluster.bmnatmd.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    //if we dont specify these optional options we get some deprecations warnings in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
