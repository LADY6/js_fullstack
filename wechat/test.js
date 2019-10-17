var parent=document.getElementById('content-items')
var test = document.getElementById('send')
console.log(test)
test.addEventListener('click', function() {
        /*console.log(123)
    var html=$('<li class="content-item">'+
    '<div class="pic">'+
        '<img src= "https://p1.ssl.qhimg.com/t0190d184f0158ad3a3.png" alt="">'+
    '</div>'+
    '<div class="message">'+
        '<p class="name">江西移动10086</p>'+
        '<p class="detail">你现在欠费100元</p>'+
    '</div>'+
'</li>')
html.appendTo(parent)*/
    var li=document.createElement('li')//创建元素结点
    li.setAttribute('class','content-item')//为li设置属性
    
    var divPic=document.createElement('div')
    divPic.setAttribute('class','pic')
    li.appendChild(divPic)//将divPic放入li中
    
    var img=document.createElement('img')
    img.setAttribute('src','https://p1.ssl.qhimg.com/t0190d184f0158ad3a3.png')
    divPic.appendChild(img)
    
    var message=document.createElement('div')
    message.setAttribute('class','message')
    li.appendChild(message)
    
    var p1=document.createElement('p')
    p1.setAttribute('class','name')
    var p1Text=document.createTextNode('篮球')//创建文本结点
    p1.append(p1Text)
    message.appendChild(p1)
    
    var p2=document.createElement('p')
    p2.setAttribute('class','detail')
    var p2Text=document.createTextNode('出手即证明')
    p2.appendChild(p2Text)
    message.appendChild(p2)
    parent.appendChild(li)
})