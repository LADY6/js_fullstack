- live-server
  http服务
  http协议是web的底层



-node 内建http模块
  http.createServer((req, res) =>{
        console.log(req.url);
    }).listen(1314)

- http fs path node 内置模块
  index.html
  sloth.png
  两者类型不同
  text/html  image/png
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})