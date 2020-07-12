const http = require('http')
const fs = require('fs')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)

  if (requset.url === '/') {
    response.writeHead(302, {
      'Location': '/new'
    })
    response.end('')
  }

  if(requset.url === '/new'){
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    response.end('<div>this is content</div>')
  }

}).listen(8888)

console.log('server listening on 8888')