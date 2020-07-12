const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)
  const html = fs.readFileSync('test.html', 'utf8')
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Enconding':'gzip'
  })
  response.end(zlib.gzipSync(html))
  response.end('console.log("script loaded 1")')

}).listen(8888)

console.log('server listening on 8888')