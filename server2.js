const http = require('http')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  response.end('456')

}).listen(8887)

console.log('server listening on 8887')