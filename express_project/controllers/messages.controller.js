const path = require("path"); //this handles path on diffrent operation systems
//  linux,mac ==> /folder/file.jpg    windows ==> \folder\files.jpg

function getMessages(req, res) {
  // res.sendFile(path.join(__dirname, "..","images", "public", "photo.jpg"));

  // res.render('messages',{layout:'OtherlayoutName.hbs',title:'hardWork',friendName:'kasinath'})//explicitly selecting other layout.default is layout.hbs

  res.render("messages", { title: "hardWork", friendName: "kasinath" });
}

function postMessage(req, res) {
  console.log("updataing messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
