var Beverage=function (param) {
  var boilWater=function () {
    console.log("BoilWater...");
  }
  var brew=param.brew||function () {
    console.log("Brewing ....");
  }
  var pourIncup=param.pourIncup||function () {
    console.log("pourIncup....");
  }
  var addCondiments=param.addCondiments||function () {
    console.log("addCondiments...");
  }

  var f=function(){};
  f.prototype.init=function () {
    boilWater();brew();
    pourIncup();addCondiments();
  }
  return f;
}

var Coffer=Beverage({
  brew:function () {
    console.log("brewing coffer");
  },
  addCondiments:function () {
    console.log("addCondiments coffer");
  }
});


var tea=Beverage({
  brew:function () {
    console.log("brewing tea");
  },
  addCondiments:function () {
    console.log("addCondiments tea");
  }
});

var c=new Coffer();
c.init()
