1. 上下文菜单的实现

让浏览器像桌面应用一样
EventUtil.addHandler(window,"contextmenu",function(event){

		event=EventUtil.getEvent(event);
		console.log(event);
		EventUtil.preventDefault(event);
		var menu=document.getElementById("myMenu");
		menu.style.left=event.clientX+"px";
		menu.style.top=event.clientY+"px";
		menu.style.visibility="visible";
});

最好绑定一个点击消失的功能 onclick --- hidden 


2. beforeunload 


	EventUtil.addHandler(window,"beforeunload",function(event){
		event=EventUtil.getEvent(event);
		var message="goodbey";
		event.returnValue=message;
		return message;
	});


	当用户打算离开页面的时候绑定此消息

3. DOMContentLoaded 当页面的DOM加载完毕时传递此消息

4. readystatechange 的几个阶段

uninitialized ,loading loaded interactive complete 

interactive 一般会与readystatechange 同时触发

但是interactive的事件调用不一定早于完成阶段 因此 最好同时检测是否是

如下 if(document.readystatechange=="interactive"||document.readystatechange=="complete"){

}


5. hashchange 绑定用户的hashchange消息

	EventUtil.addHandler(window,"hashchange",function(event){
		alert("the new url"+event.newURL);
	});


6.关于页面的缓存可使用pageshow pagehide 以及persisted来实现