const startBtn = document.querySelector('#page-one button');
const pageOne = document.querySelector('#page-one');
startBtn.addEventListener('click', function () {
    pageOne.style.display = 'none'; //关掉page-one，显示第二页面
})
let time = 30;
init()

function init() {
    setInterval(function () {
        time--;
        document.getElementById('timer').innerHTML = time;
    }, 1000)
}
//画格子
nextStep();

function nextStep() {
    step++;
    console.log("step:\t" + step);
    let col = step + 1;
    let blockWidth = (100 / col) - 2;
    let arr = [];
    let [normalColor, specialColor] = getColor(step);
    //循环画出盒子
    for (let i = 0; i < col * col; i++) {
        //生成盒子 模板字符串 用 `` 表示 用于字符串的拼接
        let item = `
                <div class="block" style="background-color:#${normalColor};
                width:${blockWidth}%">
                    <div class="block-inner"></div>
                </div>`;
        arr.push(item);
    }
}