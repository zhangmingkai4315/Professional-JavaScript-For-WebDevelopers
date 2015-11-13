var Iterator=function (obj) {
    var len=0,array=[],pointer=0;
    for(var o in obj){
      array.push(o);
    }
    len=array.length;
    return {
      next:function () {
        console.log("Next pointer");
        return len>=pointer?array[++pointer]:null;
      },
      before:function () {
        console.log("Before pointer");
        return pointer>=0?array[--pointer]:null
      },
      current:function () {
        return array[pointer];
      }
    }
};


var iter1=Iterator([1,2,3,4,5,6]),
    iter2=Iterator([2,3,4,5,67]);
var iterObj=Iterator({
  name:"Default",
  getName:function () {
    return this.name;
  }
});
console.log(iterObj.current());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.before());
console.log(iter1.next());
