var creatDiv=function (html) {
  this.html=html;
  this.init();
};

creatDiv.prototype.init=function () {
  console.log("Init create at first time");
}

var proxySingleton=function (obj) {
  var instance;
  return function (html) {
    if(typeof instance === 'undefined'){
      instance=new obj(html)
    }
    return instance;
  }
};
var proxySingleton=proxySingleton(creatDiv);
var a=proxySingleton("hello");
var b=proxySingleton("world");
console.log(a);
console.log(b);
console.log(b===a);
