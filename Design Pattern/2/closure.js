var fun=function () {
  var a=0;
  return function () {
    a++;
    console.log(a);
  };
};

var f=fun();

f();
f();
f();
f();

//构建缓存 提高性能

var mult=(function () {
  var cache={};
  return function () {
    var args=Array.prototype.join.call(arguments,',');
    console.log(cache);
    if(cache[args]){
      return cache[args];
    }
    var a=1;
    for(var i=0;i<arguments.length;i++){
      a=a*arguments[i];
    }

    return cache[args]=a;
  }
}())

console.log(mult(1,2,3,5,6,3,54));
console.log(mult(1,2,3,5,6,3,54));


// closure 与 面向对象 的区别


var extend=function () {
  var value=0;
  return {
    call:function () {
      value++;
      console.log(value);
    }
  }
}
var e=extend()
e.call()
e.call()


var extend={
  value:0,
  call:function () {
    this.value++;
    console.log(this.value);
  }
}

extend.call()
extend.call()
