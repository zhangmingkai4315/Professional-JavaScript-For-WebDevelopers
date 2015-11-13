var each=function (array,fn) {
  var len=array.length;
  for(var i=0;i<len;i++){
    fn.call(null,i,array[i]);
  }
};
each([1,2,3],function (i,item) {
  console.log(i+":"+item);
});

// ------------------------------------------
var each=function (array,fn) {
  var len=array.length;
  for(var i=0;i<len;i++){
    fn.call(null,i,array[i]);
  }
};


Array.prototype.each=function (fn) {
  // fn();
  var len=this.length;
  for(var i=0;i<len;i++){
    fn.call(null,i,this[i]);
  }

};
[1,2,3].each(function (i,item) {
  console.log(i+":"+item);
});
