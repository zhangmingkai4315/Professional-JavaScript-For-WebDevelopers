var Dog=function (name,age) {
  this.name=name||"DefaultName";
  this.age=age||0;
};
Dog.prototype.showInfo=function () {
  console.log("My name is "+this.name+" ,age "+this.age);
};
var dog1=new Dog("M",1);
var dog2=new Dog("F",2);

dog1.showInfo();
dog2.showInfo();

Object.create=Object.create||function (obj) {
  var Empty=function () {
  };
  Empty.prototype=obj;
  return Empty;
};


var dog3=Object.create(dog1);
// var cloneObj=function (obj) {
//   var Empty=function () {
//   };
//   Empty.prototype=obj;
//   return new Empty();
// };
//
// var dog4=cloneObj(dog1);
dog3.showInfo();
// dog4.showInfo();
