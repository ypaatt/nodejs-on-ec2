var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Analysing and designing CI/CD pipeline for Iot edge devices using raspberry pi b4 , docker '); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
