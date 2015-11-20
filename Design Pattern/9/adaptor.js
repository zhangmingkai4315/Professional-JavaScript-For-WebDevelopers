var BaiduMap={
  show:function () {
    console.log("BaiduMap showing");
  }
};
var GoogleMap={
  show:function () {
    console.log("Google showing");
  }
};

var renderMap=function (map) {
  if(map.show instanceof Function){
    map.show();
  }
};

renderMap(BaiduMap);
renderMap(GoogleMap);

// 两个对象均提供了show 方法 ，所以不需要适配器。适配器适用于当接口不一致的时候使用

var SosoMap={
  display:function () {
    console.log("SosoMap display");
  }
};

var SosoMapAdaptor={
  show:function () {
    SosoMap.display();
  }
};
renderMap(SosoMapAdaptor);

// 有些时候我们的数据发生了改变 除了改代码，我们还可以通过适配器的方式解决问题。增加一个中间层，使得原来的数据和新的数据格式匹配。
// 主要解决接口不匹配的问题
