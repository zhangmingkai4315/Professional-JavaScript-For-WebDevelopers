Function.prototype.before=function (fn) {
  var self=this;
  return function(){
    fn.apply(this,arguments);
    return self.apply(this,arguments);
  };
};

Function.prototype.after=function (fn) {
  var self=this;
  return function(){
    var ret=self.apply(this,arguments);
    fn.apply(this,arguments);
    return ret;
  };
};


var fun=function () {
  console.log(1);
}

fun=fun.before(function () {
  console.log(0);
}).after(function () {
  console.log(2);
}).before(function () {
  console.log(0);
});

fun();
