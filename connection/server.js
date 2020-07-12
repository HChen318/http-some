const http = require('http')
const fs = require('fs')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)

  const html = fs.readFileSync('test.html', 'utf8')
  const img = fs.readFileSync('7.jpg');
  if (requset.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    response.end(html)
  } else {
    response.writeHead(200,{
      'Content-Type' : 'image/jpg'
    })
    response.end(img)
  }


}).listen(8888)

console.log('server listening on 8888')