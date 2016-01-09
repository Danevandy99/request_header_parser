var http = require('http');
var url = require('url');
var parser = require('ua-parser-js');

function handleRequest(port) {
  http.createServer(function(request, response) {
      if (request.method != 'POST') {
        var object = url.parse(request.url, true)
        var jo = {};
        jo.ipaddress = request.headers['x-forwarded-for'];
        jo.language = request.headers['accept-language'];
        jo.software = parser(request.headers['user-agent']).os;
        response.end(JSON.stringify(jo));
    }

  }).listen(port)
console.log('Listening on port ' + port);
}

handleRequest(8080)
