var Order500=function (orderType,pay,stock) {
  if(orderType===1&&pay===true){
    console.log('Get 100 coupon and 1 device');
  }else{
    Order200(orderType,pay,stock);
  }
};

var Order200=function (orderType,pay,stock) {
  if(orderType===2&&pay===true){
    console.log('Get 50 coupon and 1 device');
  }else{
    Order(orderType,pay,stock);
  }
};

var Order=function (orderType,pay,stock) {
  if(stock>0){
    console.log('Get 1 device');
  }else{
    console.log("No device left");
  }
};
Order500(1,true,20);
Order500(2,true,20);
Order500(0,true,20);
Order500(0,true,0);

//  代码将业务逻辑写入其中一旦将来变更 则维护成本较高、
var Order500=function (orderType,pay,stock) {
  if(orderType===1&&pay===true){
    console.log('Get 100 coupon and 1 device');
  }else{
    return "Next"
  }
};

var Order200=function (orderType,pay,stock) {
  if(orderType===2&&pay===true){
    console.log('Get 50 coupon and 1 device');
  }else{
    return "Next"
  }
};

var Order=function (orderType,pay,stock) {
  if(stock>0){
    console.log('Get 1 device');
  }else{
    console.log("No device left");
  }
};


var Chain=function (fn) {
  this.fn=fn;
  this.next=null;
}

Chain.prototype.setNext=function (next) {
  return this.next=next;
}
Chain.prototype.passRequest=function () {
  var ret=this.fn.apply(this,arguments);
  if( ret ==='Next'){
    return this.next&&this.next.passRequest.apply(this.next,arguments);
  }
  return ret;
}
var chainOrder500=new Chain(Order500);
var chainOrder200=new Chain(Order200);
var chainOrder=new Chain(Order);


chainOrder500.setNext(chainOrder200);
chainOrder200.setNext(chainOrder);
chainOrder500.passRequest(1,true,500);
chainOrder500.passRequest(2,true,500);
chainOrder500.passRequest(0,true,500);
chainOrder500.passRequest(0,false,0);

// 、、、、、、、、、、、、、、、、、、、、、、、、、、、



Function.prototype.after=function (fn) {
  var self=this;
  return function(){
    console.log("DEBUG");
    var ret=self.apply(this,arguments);
    if(ret==='Next'){
      return fn.apply(this,arguments);
    }
    return ret;
  }
};

var order=Order500.after(Order200).after(Order);
order(1,true,500);
