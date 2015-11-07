var Animal=function (name) {
  this.name=name;
}
Animal.prototype.say=function () {
  console.log("I am a "+this.name);
}

var objectFactory=function () {
  var obj=new Object();
  var constructor=[].shift.call(arguments);   // arguments 并非数组但是类数组结构 可以使用call 来调用数组
  obj.__proto__=constructor.prototype;
  var ret=constructor.apply(obj,arguments);   // apply 调用方式为 上下文对象， 参数数组
  return typeof ret==='object'? ret : obj;
}

var dog=objectFactory(Animal,'dog');
dog.say();


// 上述代表了new 一个对象的过程，首先复制prototype 然后执行一些参数的初始
