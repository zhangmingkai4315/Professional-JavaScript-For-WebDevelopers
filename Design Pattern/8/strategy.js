var upload1=function () {

}
upload1.prototype.upload=function () {
  console.log("Upload--->1");
};
var upload2=function () {

}
upload2.prototype.upload=function () {
  console.log("Upload--->2");
};

var upload3=function () {

}
upload3.prototype.upload=function () {
  console.log("Upload--->3");
};

var UserMethod=function (uploadObj) {
  this.uploadObj=uploadObj;
}
UserMethod.prototype.upload=function () {
  this.uploadObj.upload()
};

UserMethod.prototype.changeMethod=function (obj) {
  this.uploadObj=obj;
}


var u1=new UserMethod(new upload1());
u1.upload()
u1.changeMethod(new upload3())
u1.upload()
