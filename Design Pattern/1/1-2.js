// 如果在java语言中 不同的对象想使用同一个接口，则必须继承自相同的对象 并向上转型


var dog={
  duckSinging:function () {
    console.log("Singing");
  }
};
var duck={
  duckSinging:function () {
    console.log("Singing");
  }
}

var choir=[];

var joinChoir=function (animal) {
  if(animal&& typeof(animal.duckSinging) ==='function'){
    choir.push(animal)
    console.log("Join choir");
  }
}

joinChoir(dog);
joinChoir(duck);
