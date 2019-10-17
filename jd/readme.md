--基本的结构套路 
  #app>.page
---*css 解析也是要花时间的  *费时


--浏览器有认识  
  -webkit Google浏览器内核  手机端多以为主
  -ms PC端，window操作系统，内核是微软的

  text-size-adjust :100%
  用加前缀的方式，-webkit
--自适应，rem em =>(相对单位)   px(靠不住)
   weui使用的是em 
   html 中定义font-size：100px  京东喜欢用这种
   字体大小是 16px 那么就是16rem 

---css考点
    -webkit-text-size-adjust :100%
    -webkit-tap-hightlight-color:transpant
    -webkit-overfolw-scrolling:touch
    html font-size:100px

- oo css
  .quick-login .quick-type
  stylus 嵌套
  容易冲突
  .quick-type
  模块化，命名空间

- base64
  图片更小 任何一张图片都是编码
  传输更快 完全在css中 不需要发送 http 请求 性能开销的核心

