const http = require('http')
const fs = require('fs')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)

  if (requset.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123;max-age=2','abc=456; httpOnly']  // max-age 过期时间,httpOnly 禁止js访问cookie
    })
    response.end(html)
  }

}).listen(8888)

console.log('server listening on 8888')