function NumAutoPlusAnimation(targetEle, options) { 
  
    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/ 
    options = options || {}; 
    var $this = document.getElementById(targetEle), 
     time = 1500, //总时间--毫秒为单位 
     finalNum = options.num || $this.firstChild.nodeValue, //要显示的真实数值 
     regulator = options.regulator || 100;//调速器，改变regulator的数值可以调节数字改变的速度 
    var y=finalNum.split('.')[1];
     var step = y / (time / regulator),/*每30ms增加的数值--*/ 
     count = 0, //计数器 
     initial = 0; 
  
    var timer = setInterval(function() { 
  
     count = count + step; 
  
     if(count >= y) { 
      clearInterval(timer); 
      count = y; 
     } 
     //t未发生改变的话就直接返回 
     //避免调用text函数，提高DOM性能 
     var t = Math.floor(count); 
     if(t == initial) return; 
  
     initial = t; 
  
     $this.innerHTML = "."+initial; 
    }, 30); 
} 