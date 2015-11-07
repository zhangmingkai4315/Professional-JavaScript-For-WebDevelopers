// 如何定义私有变量

var Dog=function () {
  var _name="DefaultName",_age=0;
  return {
    getName:function () {
      return _name;
    },
    getAge:function () {
      return _age;
    },
    setName:function (name) {
      _name=name;
    },
    setAge:function (age) {
      _age=age;
    }
  };
};

var AceDog=new Dog();
AceDog.setName("ace");
AceDog.setAge(3);

console.log(AceDog.getName());
console.log(AceDog.getAge());
console.log(AceDog._name);


//
// ace
// 3
// undefined
