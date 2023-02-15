var http = require('http');

var json = JSON.parse(xhReq.responseText)[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }]

//create a server object:
http.createServer(function (req, res) {
  res.write(json);
  res.end();
}).listen(8080);