var simpleObserver={}
simpleObserver.clientList=[];

simpleObserver.booking=function (fn) {
  this.clientList.push(fn);
}

simpleObserver.trigger=function () {
  var number=this.clientList.length;
  while(number--){
    (this.clientList[number])();
  }
  // for(var i in this.clientList){
  // }
}

simpleObserver.booking(function () {
  console.log("I am in!"+"Mike");
});

simpleObserver.booking(function () {
  console.log("I am in !"+"Jasmin");
});

simpleObserver.trigger();
