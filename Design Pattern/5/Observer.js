// 定义事件处理

var event={
  clientList:[],
  listen:function (key,fn) {
      if(!this.clientList[key]){
        this.clientList[key]=[];
        this.clientList[key].push(fn);
      }
      console.log("Add new listener");
  },
  trigger:function () {
    var key=Array.prototype.shift.call(arguments);
    if(this.clientList[key]){
      var number=this.clientList[key].length;
      while(number--){
        (this.clientList[key][number]).apply(this,arguments);
      }
    }
  },
  remove:function (key,fn) {
    var funcs=this.clientList[key];
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
}

// 使其所有的对象都能拥有该订阅发布属性

var installEvent=function (obj) {
  for(var i in event){
    obj[i]=event[i];
  }
};


var salesOffice={}
installEvent(salesOffice);



// 测试代码
salesOffice.listen("squareMeter88",f1=function (price) {
  var price=Array.prototype.shift.call(arguments);
  console.log("Price"+price);
});

salesOffice.listen("squareMeter110",f2=function (price) {
  console.log("Price"+price);
});

salesOffice.trigger('squareMeter88',2000000);
salesOffice.trigger('squareMeter110',2220000);

salesOffice.remove("squareMeter88",f1);

salesOffice.trigger('squareMeter88',2000000);
salesOffice.trigger('squareMeter110',2220000);
