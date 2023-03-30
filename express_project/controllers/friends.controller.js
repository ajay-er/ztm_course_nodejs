const model = require("../models/friends.model");

function getFriend(req, res) {
  const FriendId = Number(req.params.FriendId);
  const friend = model[FriendId];
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
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
