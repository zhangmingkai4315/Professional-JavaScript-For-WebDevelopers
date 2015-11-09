var MyClass=function () {
  this.name="Mick";
};

var obj1=new MyClass();
console.log(obj1.name);

var MyClass2=function () {
  this.name="Mick";
  return {
    name:"OtherName"
  };
};

var obj2=new MyClass2();
console.log(obj2.name);  //这里由于构造函数显式的返回了一个对象，所以原来的内部this 不再可以被new 出来的对象所拥有

var obj3={
  name:"anny",
  getName:function () {
    console.log(this.name);
  }
};

var obj4={
  name:"Anny"
};

obj3.getName.call(obj4);
