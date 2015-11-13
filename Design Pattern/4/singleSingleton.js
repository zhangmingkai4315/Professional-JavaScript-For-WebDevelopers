var CreateDiv=(function () {

  var instance;
  var CreateDiv=function (html) {
    if(typeof instance!=='undefined'){
      return instance;
    }else{
      this.html=html;
      this.init();
      return instance=this;
    }
  }
  return CreateDiv;
})();

CreateDiv.prototype.init=function () {
  console.log("Init only once!");
  console.log(this.html);
};

var c1=new CreateDiv("sven1");
var c2=new CreateDiv("sven2");

console.log(c1===c2);
