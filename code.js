var generateImage = require('random-image-creator');
const http = require("http");
http.createServer(function(request, response){
   response.writeHead(200, {"Content-Type": "text/html"})
   response.end("<img src='"+generateImage(280,400)+"'>")
}).listen(3000)
