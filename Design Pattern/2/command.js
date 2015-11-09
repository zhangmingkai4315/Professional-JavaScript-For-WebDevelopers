var Tv={
  open:function () {
    console.log("Open tv");
  },
  close:function () {
    console.log("Close tv");
  }
};

var CreateCommand=function (receive) {
  var excute=function () {
    return receive.open();
  };
  var undo=function () {
    return receive.close();
  };
  return {
    excute:excute,
    undo:undo
  };
};


var setCommand=function (command) {
  // document.getElementById("execute").onclick=function () {
  //   command.execute();
  // };
  // document.getElementById("undo").onclick=function () {
  //   command.undo();
  // };
  command.excute();
  command.undo()
};

setCommand(CreateCommand(Tv));
