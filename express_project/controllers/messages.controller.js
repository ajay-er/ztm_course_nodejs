const path = require("path");//this handles path on diffrent operation systems
//  linux,mac ==> /folder/file.jpg    windows ==> \folder\files.jpg

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..","images", "public", "photo.jpg"));
}

function postMessage(req, res) {
  console.log("updataing messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
