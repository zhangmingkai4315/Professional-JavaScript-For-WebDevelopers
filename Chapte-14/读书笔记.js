1. form 表单
在html中的<form>对应了js中的HTMLFormElement类型
reset() 和submit()函数的使用
<input type="submit"> 重置按钮，将重置所有用户的输入到最原始的输入内容

2. 如何使用焦点和输入进行变换背景


var textBox=document.forms[0].elements[0];
EventUtil.addHandler(textBox,"focus",function(event){
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);
	if(target.style.backgroundColor!=="red"){
		target.style.backgroundColor="yellow"
	}
});


EventUtil.addHandler(textBox,"blur",function(event){
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);
	if(/[^\d]/.test(target.value)){
		target.style.backgroundColor="red";
	}else{
		target.style.backgroundColor="";
	}
});

3. <textarea type="text" maxlength="50" size="25" value="text input area">

4.  屏蔽字符串输入

EventUtil.addHandler(textBox,"keypress",function(event){
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);

	var charCode=EventUtil.getCharCode(event);

	if(!/\d/.test(String.fromCharCode(charCode))&&charCode>9&&!event.ctrlKey){
		EventUtil.preventDefault(event);
	}



});