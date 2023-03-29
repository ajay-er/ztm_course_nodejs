//*time to make node servers

const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    //* the alternative way for the above writing header and contenttype🔽
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        name: "Sir Isaac Newton",
      })
    );
  } else if (req.url === "/messages") {
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
    res.end();
  }else{
    res.statusCode = 404;
    res.end();//dont forgot to call this end function.
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost

// we don't explicitly call the server.on() method in the code example,
//  it is still being called internally by the server.listen() method to register a listener for the listening event.
