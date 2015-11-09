var isNumber=function (input) {
  // console.log(Object.prototype.toString.call(input));
  return Object.prototype.toString.call(input)==='[object Number]'
}

var isArray=function (input) {
  // console.log(Object.prototype.toString.call(input));
  return Object.prototype.toString.call(input)==='[object Array]'
}


var isString=function (input) {
  // console.log(Object.prototype.toString.call(input));
  return Object.prototype.toString.call(input)==='[object String]'
}

console.log(isNumber(20));
console.log(isNumber([23,3,4]));
console.log(isString("20"));
