const express = require("express");

const app = express();

const PORT = 3001;

const friends = [
  {
    id: 0,
    name: "Sir Ajay",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} -- ${req.url} -- ${delta}ms`);
});

app.use(express.json());//express.json() parses the JSON data in the request body and adds it to the req.body object.automatically calls next 

app.post("/friends", (req, res) => {
  if(!req.body.name){
    return res.status(400).json({
      error: 'missing friend name',
    })
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:FriendId", (req, res) => {
  const FriendId = Number(req.params.FriendId);
  const friend = friends[FriendId];
  if (friend) {
    //if frined undefined --this is not going to work because it is falsy value
    res.json(friend);
    // 🔼default is status code 200 if we want to send explicitly then we can use🔽
    //! res.status(200).json(friend);
  } else {
    //? /frineds/22
    //even it is error good practice returning json object
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li><h1>Am genious</h1></ul></li>");
});

app.post("/messages", (req, res) => {
  console.log("updataing messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
