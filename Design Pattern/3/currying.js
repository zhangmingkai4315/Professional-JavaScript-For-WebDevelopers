var cost=(function () {
  var args=[];
  return function(){
    if(arguments.length===0){
      var cost=0;
      for(var i=0;i<args.length;i++){
        cost+=args[i];
      }
      return cost;
    }else{
      Array.prototype.push.apply(args,arguments);
    }
  };
})();

cost(100);    //并不是直接计算
cost(200);    //并不是直接计算
console.log(cost());    //返回计算结果



var currying=function (fn) {
  var args=[];
  return function(){
    if(arguments.length===0){
      return fn.apply(this,args);
    }else{
      Array.prototype.push.apply(args,arguments);
      return arguments.callee;
    }
  }
}


var cost=(function () {
  var money=0;
  return function () {
    for(var i=0;i<arguments.length;i++){
      money+=arguments[i];
    }
    return money;
  }
})();

cost(100);
cost(900);
console.log(cost());
