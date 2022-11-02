//创建数组存放背景url
var bgs = new Array('url("images/bg/bg01.jpg")', 'url("images/bg/bg02.jpg")', 'url("images/bg/bg04.jpg")', 'url("images/bg/bg05.jpg")', 'url("images/bg/bg08.jpg")', 'url("images/bg/bg25.jpg")', 'url("images/bg/bg09.jpg")', 'url("images/bg/bg10.jpg")', 'url("images/bg/bg12.jpg")', 'url("images/bg/bg13.jpg")', 'url("images/bg/bg25.jpg")', 'url("images/bg/bg15.jpg")', 'url("images/bg/bg17.jpg")', 'url("images/bg/bg19.jpg")', 'url("images/bg/bg20.jpg")', 'url("images/bg/bg21.jpg")', 'url("images/bg/bg22.jpg")', 'url("images/bg/bg23.jpg")', 'url("images/bg/bg25.jpg")', 'url("images/bg/1.png")', 'url("images/bg/2.png")', 'url("images/bg/3.png")', 'url("images/bg/4.png")', 'url("images/bg/5.png")', 'url("images/bg/6.png")');

//随机插入背景函数
function changeBg() {
    document.getElementById('body').style.backgroundImage = bgs[Math.round(Math.random() * (bgs.length - 1))];
}
