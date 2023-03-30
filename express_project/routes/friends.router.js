const express = require("express");

const friendsController = require("../controllers/friends.controller");

//routere is like a mini application.it contains its own set of middleware and routes.
const friendsRouter = express.Router();

//we can even add custom middleware to this router.(this applies to just this router)

friendsRouter.use((req,res,next)=>{
    console.log('ip address: ',req.ip);
    next();
})
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:FriendId", friendsController.getFriend);

module.exports = friendsRouter;
