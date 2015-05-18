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

4.  屏蔽字符输入

EventUtil.addHandler(textBox,"keypress",function(event){
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);

	var charCode=EventUtil.getCharCode(event);

	if(!/\d/.test(String.fromCharCode(charCode))&&charCode>9&&!event.ctrlKey){
		EventUtil.preventDefault(event);
	}



});



5. required text="email" text="url"
   pattern="\d+"
checkValidity()检查表单元素是否有效
依据为各种默认的和要求的检查项：比如requried number pattern 


6. 对于selection 动态的增加和删除可使用方法

add remove 

var newOption=new Option("OPTION TEXT","OPTION VALUE");
selectbox.add(newOption,undefined);]]]


7.  表单元素序列化
8. 富文本框

实现方式  1. 可以使用内嵌的iframe 并将其载入时设置designMode="on"
	    2. 可以使用任何的元素，并将其contentEditable设置为true


提交到服务器的是一段html代码 需要获取innerHTML代码保存到字符串
