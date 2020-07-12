const http = require('http')
const fs = require('fs')

http.createServer(function (requset, response) {
  console.log('request com', requset.url)

  if (requset.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (requset.url === '/script.js') {
    const etag = requset.headers['if-none-match']
    if (etag === '777') {
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=55000,no-cache', // 缓存时间 no-cache不能直接使用缓存,要去服务器验证If-Modified-Since: 123 If-None-Match: 777
        'Last-Modified': '123',
        'Etag': '777'
      })
      // 304就代表命中缓存了 直接返回客户端缓存信息
      // 直接忽略11111
      response.end('11111')
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=55000,no-cache', // 缓存时间 no-cache不能直接使用缓存,要去服务器验证 no-store 忽略任何缓存信息,这是一个全新的请求
        'Last-Modified': '123',
        'Etag': '777'
      })
      // Last-Modified 和 Etag 来验证是否可以读取本缓存

      // 因为设置了客户端缓存了,前端假如内容变化,服务器无法得知,打包时有对应的hash值变化,所以请求的url变化所以会有最新代码
      response.end('console.log("script loaded 1")')
    }


  }

}).listen(8888)

console.log('server listening on 8888')