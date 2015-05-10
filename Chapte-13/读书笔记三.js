内存和性能：

对于javascript中的大量事件处理函数 导致访问和加载过慢，内存占据性能下降
可以使用事件委托的方式：

比如：事件委托的方式

myul.addEventListener("click",function(event){
	switch(event.target.id){
		case "myli_1":
			alert("myli_1");
			break;
		case "myli_2":
			alert("myli_2");
			break;
		default:
			alert("nothing");
			break;
	}
});

此方式只需要产生更少的函数和DOM访问内存消耗更低


删除不需要的事件函数

btn.onclick=null;
删除操作也会关闭事件的冒泡


模拟消息的创建 

createEvent()