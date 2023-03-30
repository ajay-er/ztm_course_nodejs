function getMessages(req, res) {
  res.send("<ul><li><h1>Am genious</h1></ul></li>");
}

function postMessage(req, res) {
  console.log("updataing messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
