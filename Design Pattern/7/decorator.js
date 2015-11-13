
Function.prototype.before=function (fn) {
  var _self=this;
  // fn.call(_fn);
  return function () {
    fn.apply(this,arguments);
    return _self.apply(this,arguments);
  };
};
Function.prototype.after=function (fn) {
  var _self=this;
  // fn.call(_fn);
  return function () {
    var ret=_self.apply(this,arguments);
    fn.apply(this,arguments);
    return ret
  };
};





var f1=function (name) {
  console.log("F1 is running by:"+name);
};

f1=f1.before(function () {
  console.log("Before");
});
f1=f1.after(function () {
  console.log("After");
});



f1("Mick");

f1("Mick");
