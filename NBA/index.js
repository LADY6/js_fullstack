// console.log(a);
// var a = 1;
// 以上执行步骤为:
// var a;
// console.log(a);
// a = 1;

const wrap = document.getElementById('wrap');

let images = [
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
]
let count = 0;

images.sort((a, b) => 0.5 - Math.random());
init();
const allImg = document.querySelectorAll('#wrap img');

function init() {
    for (let i = 0; i < 12; i++) {
        let img = document.createElement('img');
        img.src = "./image/bg.jpg";
        img.onclick = function () {
            changeImage(img, i);
        }
        wrap.appendChild(img);
    }
}
let firstCard = null;
let firstId = null;

function changeImage(imgNode, i) {
    //翻第一张
    if (count === 0) {
        firstCard = images[i];
        firstId = i;
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
    }
    //翻第二张
    if (count === 1) {
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
        setTimeout(() => {
        if (firstCard === images[i]) {
            wrap.removeChild(allImg[firstId]);
            wrap.removeChild(allImg[i]);
        } else {
            allImg[firstId].className='';
            allImg[firstId].src = './image/bg.jpg';
            allImg[i].className = '';
            allImg[i].src = './image/bg.jpg';
        }
        count = 0;
        firstCard=null;
        firstId=null;
    }, 1000);
    }
    count++;
}
// imgNode.src = './image/h1.ipg';
imgNode.src = images[i];
imgNode.classList.add('rotate-animation');

// var arr = [1,2,3,4,5];
// arr.sort((a,b) => a-b);//a-b<0 升序   
// arr.sort((a,b) => b-a) //b-a>0 降序
// arr.sort((a,b) => 0.5 - Math.random());//乱序 随机排序 伪随机 不是真正的随机
// console.log(arr);