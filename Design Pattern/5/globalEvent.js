// 定义事件处理

var Event=(function(){
  var clientList=[],
  listen=function (key,fn) {
      if(!clientList[key]){
        clientList[key]=[];
        clientList[key].push(fn);
      }
      console.log("Add new listener");
  };
  trigger=function () {
    var key=Array.prototype.shift.call(arguments);
    if(clientList[key]){
      var number=clientList[key].length;
      while(number--){
        (clientList[key][number]).apply(this,arguments);
      }
    }
  };
  remove=function (key,fn) {
    var funcs=clientList[key];
    // console.log(fn);
    if(!funcs){
      return ;
    }else if(!fn){
      funcs&&(funcs.length=0);
    }else{
      var number=funcs.length;
      // console.log("dbug");
      for(var num=number-1;num>=0;num--){
        var _fn=funcs[num];
        // (_fn);
        if(_fn===fn){
          funcs.splice(num,1);
          console.log("remove finished");
        }
      }
    }
  }
  return {
    trigger:trigger,
    listen:listen,
    remove:remove
  }
})();


Event.listen("hi",f1=function () {
  console.log("how are u");
});
Event.listen("hello",function () {
  console.log("world");
});

Event.trigger("hi");
Event.trigger("hi");
Event.trigger("hi");
Event.trigger("hi");


Event.remove("hi",f1);

Event.trigger("hi");
