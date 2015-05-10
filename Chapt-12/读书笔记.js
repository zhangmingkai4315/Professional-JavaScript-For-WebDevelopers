1. 样式

var supportsDom2CSS=document.implementation.hasFeature("CSS","2.0");
var supportsDom2CSS2=document.implementation.hasFeature("CSS2","2.0");

var mydiv=document.getElementById("mydiv");
mydiv.style.background="red"
mydiv.style.height="200px";

混杂模式下的height为200,代表200px 
标准模式下则被忽略

mydiv.style.cssText="width:25px;height:100px;background-color:green";


for (var i = 0; i < mydiv.style.length; i++) {
	prop=mydiv.style[i];
	value=mydiv.style.getPropertyValue(prop);
	console.log(prop+":"+value);
}


// VM58:5 background-repeat-x:initial
// VM58:5 background-repeat-y:initial
// VM58:5 background-attachment:initial
// VM58:5 background-position-x:initial
// VM58:5 background-position-y:initial
// VM58:5 background-origin:initial
// VM58:5 background-clip:initial
// VM58:5 background-color:red
// VM58:5 background-size:initial
// VM58:5 height:200px

2. 如何计算最终显示的style
	computedStyle=document.defaultView.getComputedStyle(mydiv.null);

	ie 中使用：mydiv.currentStyle;

3. 获得stylesheet的列表

var supportsDom2StyleSheets=document.implementation.hasFeature("StyleSheets","2.0");
var sheet=null;
for(var i=0,len=document.styleSheets.length;i<len;i++){
	sheet=document.styleSheets[i];
	console.log(sheet.href);

}


4. document.body.scrollHeight 和 document.body.scrollWidth 包含了隐藏的内容大小

document.body.clientHeight 和document.body.clientWidth 仅仅指的是浏览器的大小

5. 获得遍历一个div元素的所有元素

var div=document.getElementById("div1");
var iterator=document.createNodeIterator(div,NodeFilter.SHOW_ALL, null);

var node=iterator.nextNode();
while(node!==null){
	alert(node.tagName);
	node=iterator.nextNode();
}

var filter=function(node){
	return node.tagName=='li'?NodeFilter.FILTER_ACCEPT:NodeFilter.FILETER_SKIP;
}

var iterator1=document.createNodeIterator(div,NodeFilter.SHOW_ALL, filter);

var node=iterator1.nextNode();
while(node!==null){
	alert(node.tagName);
	node=iterator1.nextNode();
}
