// 不同的对象通过同一个参数引入
var dog=function () {
};
dog.prototype.sound=function () {
  console.log("wangwangwang");
}

var duck=function(){
};

duck.prototype.sound=function () {
  console.log("guaguagua");
}


var makeSound=function (animal) {
  if(animal&& animal instanceof dog){
    animal.sound();
    console.log("Dog sound");
  }else if (animal && animal instanceof duck){
    animal.sound();
    console.log("Duck sound");
  }
};
makeSound(new dog());
makeSound(new duck());
