var strategy={
  minLength:function (value,number) {
    if(value.length>=number){
      return true;
    }else{
      return false;
    }
  },
  isNotEmpty:function (value) {
    if(value&&value.length>0){
      return true;
    }else{
      return false;
    }
  }
}


var Validator=function () {
  this.cache=[];
};

Validator.prototype.add=function (value,strategyItem) {
  var strategyArray=strategyItem.split(':'),
      strategyMethod=strategyArray[0],
      strategyArgs=strategyArray[1];

      this.cache.push(function () {
        console.log(strategyMethod);
        return strategy[strategyMethod].call(null,value,strategyArgs);
      }.bind(this));
      console.log("Add strategy");
}
Validator.prototype.start=function () {
  var error=undefined;
  for(var i=0;i<this.cache.length;i++){
    error=this.cache[i]();
    if(error){
      break;
    }
  }
  return error;
}



var validataFunc=function () {
  var validator=new Validator();
  var username="mickAd";
  validator.add(username,'isNotEmpty');
  validator.add(username,'minLength:7');
  var error=validator.start()
  if(error===false){
    console.log(error);
  }else{
    console.log("Error");
  }
};

validataFunc()
