//*time to make node servers

const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nikola tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstain",
  },
  {
    id: 3,
    name: "Ajay",
  },
  {
    id: 4,
    name: "Abdul kalam",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  // /friends/2 => ['','friends','2']

  if (items[1] === "friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    //* the alternative way for the above writing header and contenttype🔽
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = +items[2]; //converting into number using "+"  or we can use ===>>> Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    //here we didn't set the status code,but its working because the default status code is 200.
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>hello Isacc!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end(); //! The res.end() function is used to end the response process and send the response to the client. When you call res.end(), the response headers and body are sent to the client and the connection is terminated. Without it, the client would keep waiting for the response to complete.
  } else {
    res.statusCode = 404;
    res.end(); //dont forgot to call this end function.
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost

// we don't explicitly call the server.on() method in the code example,
//  it is still being called internally by the server.listen() method to register a listener for the listening event.
