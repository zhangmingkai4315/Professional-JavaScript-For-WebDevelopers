1. 早期检测浏览器<IE5.0的方式

function getElement(id){
	if(document.getElementById(id)){
		return document.getElementById(id);
	}else if(document.all){
		return document.all[id];
	}else{
		throw new Error("No way to retrive element");
	}
}

2 function hasCreateElement(){
	return typeof document.createElement == "function";
}

以上的createElement在IE8以下返回object 因为之前的为COM对象创建

返回是否为函数

检测对象的某个属性是否存在

function isHostMethod(object,property){
	var t=typeof object[property];
	return t=='function'||{!!(t=='object'&&object[property]))||t=='unknown';}
}


判断是否有插件NetScape插件
var hasNSPlugins=!!(navigator.plugins&&navigator.plugins.length);

判断是否有DOM1
var hasDOM1=!!(document.getElementById&&document.createElement&&document.getElementsByTagName);



3. 用户代理检测

navigator.userAgent
navigator.userAgent
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36"

Apple开发了webkit Chrome 基于Webkit开发。手机的浏览器也是大多采用webkit进行开发

var ua=navigator.userAgent;
if(window.opera){
	version=window.opera.version();
	opera=parseFloat(engine.ver);

}else if(/AppleWebKit\/(\S+)/.test(ua)){
	version=RegExp["$1"];
	webkit=parseFloat(version);
}else if(/MSIE ([^;]+/.test(ua))){
	version=RegExp["$1"];
	webkit=parseFloat(version);
}
537.36
检测是否为webkit


如何检测Safari -----> KHTML 
IE
GEOKO
OPERA

iphone 
ua.indexOf("iPhone")>-1




