var fun=function (a,b,c) {
  console.log([a,b,c]);
};

fun.call(null,1,2,3);
fun.apply(null,[1,2,3]);

console.log(Math.max.apply(null,[1,2,3,2,4,5,3,2]));

Function.prototype.bind=function (context) {
  var self=this;
  return function () {
    self.apply(context,arguments);
  }
};


var obj={
  name:'mick'
};
var fun=function () {
  console.log((this.name));
}.bind(obj);

fun()


Function.prototype.bind=function () {
  var self=this;
  var context=[].shift.call(arguments);
  var args=[].slice.call(arguments);
  return function () {
    self.apply(context,[].concat.call(args,[].slice.call(arguments)));
  }
}

(function () {
  console.log(Array.prototype.push.apply(arguments,[2]));
  console.log(arguments);
}(2,3,4));
