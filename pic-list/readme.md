- restful web
  DOM + CSS + JS
  URL(Universal Resource Location) 统一资源定位符
  http://www.taobao.com/shop/1/good/2

- npm init -y 
  scripts 执行一些命令
  json-server npm 包
  url 将我们的json文件向外暴露
- 语义化的url
  :1314/ports    GET文章列表
  :1314/ports/1  GET文章列表的详情(1为id)
  :1314/ports/id
- 请求
  GET    明文访问
  POST   新增数据
  PUT    修改数据
  PATCH  修改数据
  DELETE 删除数据

  PUT & PATCH 的区别
  PUT 直接覆盖
  PATCH 部分修改

- :8080 启动了live-server web页面
  :1314 启动了后端API
  不同的端口代表了不同的服务