const express = require("express");
const path = require('path');

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} -- ${req.baseUrl}${req.url} -- ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json()); //express.json() parses the JSON data in the request body and adds it to the req.body object.automatically calls next

//sometimes this middleware calls mounting the app object. routers allows us to do,we can mount a group of routes under a specific path.
//by organising things in this way ..the friends router doesn't need to worry about the other routes in the application.its kind of like a self contained application of its own.
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
