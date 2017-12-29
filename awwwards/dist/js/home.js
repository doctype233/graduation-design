'use strict';

//导航条固定
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop,
        uptop = document.querySelector('.header-main');
    if (t > 70) {
        uptop.style.position = 'fixed';
        uptop.style.top = 0;
        $('.content').css({ 'margin-top': '70px' });
    } else {
        uptop.style.position = 'relative';
        $('.content').css({ 'margin-top': '0' });
    }
};
function checkLeave() {
    console.log(1);
    event.returnValue = '确定离开当前页？';
}

$(function () {
    var temp = $('.main-center');
    var temp1 = $('.main-right');
    //忽略底部cookie
    $('.go-it').click(function () {
        $('.dialog').hide();
    });
    //导航条切换显示
    $('.btn-search').click(function () {
        temp.hide().css({ 'opacity': '0' });
        $('#hidden').addClass('show');
        temp1.hide();
        //点击关闭
        $('.header-close').click(function () {
            $('#hidden').removeClass('show');
            temp.show().css({ 'opacity': '1' });
            temp1.show();
        });
    });
    //打开菜单body位移
    $('.btn-menu span').click(function () {
        $('body').css({ 'left': '320px' });
        console.log('2');
        $('.modal1').click(function () {
            $('body').css({ 'left': '0' });
        });
    });
    //页面刷新的动画

    for (var i = 0; i < 5; i++) {
        var int = $('.int').eq(i).text();
        var dec = $('.dec').eq(i).text();
        var num = int + dec;
        var dashoffset = 250 - num / 10 * 250;
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        style.innerHTML = '@keyframes circle' + i + '{0%{stroke-dashoffset:242;}100%{stroke-dashoffset:' + dashoffset + ';}}';
        console.log(style);
    }
    // $('#modal-btn').click(function(){
    //     $('.modal1').css({'z-index':'1040'});
    // });
    //注册页！
    $('.regist').click(function () {
        $('#myModalLabel,.form1,.regist').addClass('hidden');
        $('#myModalLabel2,.form2,.login-mail1,.login-back').removeClass('hidden');
        $('.login-btn,.login-back,#modal-btn').click(function () {
            $('#myModalLabel,.form1,.login-mail1,.regist').removeClass('hidden');
            $('#myModalLabel2,.form2,.login-back').addClass('hidden');
        });
    });
});
function NumAutoPlusAnimation(targetEle, options) {

    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
    options = options || {};
    var $this = document.getElementById(targetEle),
        time = 1500,
        //总时间--毫秒为单位 
    finalNum = options.num || $this.firstChild.nodeValue,
        //要显示的真实数值 
    regulator = options.regulator || 50; //调速器，改变regulator的数值可以调节数字改变的速度 
    var y = finalNum.split('.')[1];
    var step = y / (time / regulator),
        /*每30ms增加的数值--*/
    count = 0,
        //计数器 
    initial = 0;

    var timer = setInterval(function () {

        count = count + step;

        if (count >= y) {
            clearInterval(timer);
            count = y;
        }
        //t未发生改变的话就直接返回 
        //避免调用text函数，提高DOM性能 
        var t = Math.floor(count);
        if (t == initial) return;

        initial = t;

        $this.innerHTML = "." + initial;
    }, 30);
}
NumAutoPlusAnimation("dec");
NumAutoPlusAnimation("dec2");
NumAutoPlusAnimation("dec3");
NumAutoPlusAnimation("dec4");
NumAutoPlusAnimation("dec5");