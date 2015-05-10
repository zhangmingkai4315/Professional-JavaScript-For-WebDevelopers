1. 事件流
	IE的事件冒泡流

	比如如下的代码 当你点击div时，事件会依次的传播到div body html document
	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
	</head>
	<body>
	<div id="click">Click me</div>
	</body>
	</html>


	Netscape的事件捕获流

	则从宽至严 从document 到html body 和 div 

	DOM事件流则包含了三个阶段 事件捕获阶段 事件目标阶段 事件冒泡阶段IE8不支持事件流


2. 事件的处理程序

	 var btn_click=document.getElementById("myclick");
	 btn_click.onclick=function(){
	 	alert("my id is "+this.id);
	 };
	 解耦javascript和DOM的关系，使用如上的挂载事件的方式。
	 删除的话 使用btn_click.onclick=null

3. 使用addEventListener和 removeEventListener 

     btn_click.addEventListener("click",function(){
	 	alert("ADD EVENT");
	 },false);

	 false 代表在事件的冒泡阶段捕获，true 代表在事件的捕获阶段处理
	 一般都设置为false，因为兼容性的问题，毕竟IE8不支持事件的捕获 
	 如上创建的匿名函数无法被删除，removeEventListener删除的必须为函数的名字

     针对IE的话 可以使用attachEvent 和 detachEvent 
     attachEvent("onclick",showMe);而且是绑定在事件冒泡阶段

4.  增加跨浏览器的 代码:

  	 
	 var EventUtil={
	 	addHandler:function(element,type,handler){
	 		if(element.addEventListener){
	 			element.addEventListener(type,handler,false);
	 		}else if(element.attachEvent){
	 			element.attachEvent("on"+type);
	 		}else{
	 			element["on"+type]=handler;
	 		}
	 	}
	 	removeHandler:function(element,type,handler){
	 		if(element.removeEventListener){
	 			element.removeEventListener(type,handler,false);
	 		}else if(element.detachEvent){
	 			element.detachEvent("on"+type);
	 		}else{
	 			element["on"+type]=null;
	 		}
	 	}
	 	
	 };

	 这个对象包含有两个函数 分别执行能力检测来增加事件的响应


5. event类型

event.currentTarget  event.target  事件 currentTarget 代表注册事件的对象

target 代表操作的目标


stopPropagation()函数的使用

<div id="div1">
	<div id="div2">
		Hello world
	</div>
</div>	
注册两个函数在事件的冒泡阶段：

    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");

    div1.addEventListener("click",function(){
    	alert("div1");
    },false);
    div2.addEventListener("click",function(){
    	alert("div2");
    },false);

运行时 点击hello world 在弹出div2 div1 两个

如果我们想停止事件的传播   event.stopPropagation();

6. 针对IE浏览器的事件模型如下 

var event=event?event:window.event;
var target=event.target||event.srcElement;

preventDefault:function(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue=false;   //returnValue代表了阻止默认行为
	}
}

stopPropagation:function(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble=true;   //cancelBubble 代表了阻止事件冒泡
	}
}



7. load  scroll resize unload 事件

以上四种事件可能由于不同浏览器而不同 

blur 失去焦点 
focus 获得焦点 都不回冒泡 但是当元素焦点从一个元素转移到另一个元素时


其中除了 blur 和focus所有的支持 其他的个别浏览器支持
foucseout 失去焦点
foucsein  获得焦点
blur  失去焦点
DOMFoucseOut 失去焦点的元素上触发

focus 获得焦点
DOMFoucseIn 获得焦点


8  鼠标事件 
获得鼠标点击的坐标 pageX pageY 代表了事件的相对位置 如果没有scroll则等价于clientX 和clientY 

event.screenX event.screenY 则代表了相对于外部环境的屏幕的坐标值

   EventUtil.addHandler(window,"mousewheel",function(event){
    	event=EventUtil.getEvent(event);
    	alert(event.wheelDelta);
    });


捕获滑轮消息

	getWheelDelta:function(event){
			if(event.wheelDelta){
				return event.wheelDelta;
			}else{
				return -event.detail*40;  //定义了Firefox的支持i
			}
		}


9 键盘消息 




