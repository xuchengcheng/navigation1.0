//创建数组存放背景url
var bgs = new Array('url("images/bg01.jpg")', 'url("images/bg02.jpg")', 'url("images/bg04.jpg")', 'url("images/bg05.jpg")', 'url("images/bg08.jpg")', 'url("images/bg25.jpg")', 'url("images/bg09.jpg")', 'url("images/bg10.jpg")', 'url("images/bg12.jpg")', 'url("images/bg13.jpg")', 'url("images/bg25.jpg")', 'url("images/bg15.jpg")', 'url("images/bg17.jpg")', 'url("images/bg19.jpg")', 'url("images/bg20.jpg")', 'url("images/bg21.jpg")', 'url("images/bg22.jpg")', 'url("images/bg23.jpg")', 'url("images/bg25.jpg")');

//随机插入背景函数
function changeBg() {
    document.getElementById('body').style.backgroundImage = bgs[Math.round(Math.random() * (bgs.length - 1))];
}
