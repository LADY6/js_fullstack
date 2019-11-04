## 
document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);

先看到red
再看到blue
说明:在setTimeout之前会发生一次样式计算 浏览器并渲染它