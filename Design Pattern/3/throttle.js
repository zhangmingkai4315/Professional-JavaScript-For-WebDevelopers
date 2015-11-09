window.onresize=function(){console.log("resizing")};

// 当resize窗口的时候实际上整个函数以很高的频率运行

// 如何限制执行的次数


// 测试代码
window.onresize=throttle(function(){
console.log("resizing");
},500);

var throttle=function (fn,timeInterval) {
  var _self=fn,timer,firstTime=true;
  return function () {
    var args=arguments,_me=this;
    if(firstTime){
      _self.apply(_me,args);
      return firstTime=false;
    }
    if(timer){
      return false;
    }
    timer=setTimeout(function () {
      clearTimeout(timer);
      time=null;
      _self.apply(_me,args);
    },timeInterval||500);
  };
};
