
// 1 . 获得页面的尺寸
var pageWidth=window.innerWidth;
var pageHeight=window.innerHeight;

if(typeof pageWidth!="number"){
	if(document.compatMode=="CSS1Compat"){
		pageWidth=document.documentElement.clientWidth;
		pageHeight=document.documentElement.clientHeight;
	}else{
		pageWidth=document.body.clientWidth;
		pageHeight=document.body.clientHeight;
	}
}

// 2. window操作

var winx=window.open("http://www.baidu.com","helloworld","height=400,width=400,top=10,left=10,resizeable=yes");

winx.close();

alert(winx.closed)


// 3. setInterval();

var num=0;
var max=10;
var intervalID=null;

function incrementNumber(){
	num++;
	if(num>max){
		clearInterval(intervalID);
	}
}

intervalID=setInterval(incrementNumber,500);

// 使用超时调用模拟间隔调用，保证了不会出现间隔调用的时候重叠出现的问题

var num=0;
var max=10;


function incrementNumber(){
	num++;
	if(num<max){
		setTimeout(incrementNumber,500);
	}
}
setTimeout(incrementNumber,500);



// navigator 检测插件针对IE和非IE是有差别的IE的需要使用插件来生成一个COM 若是未知的插件则生成错误

// 检查字符串的参数

function getQueryStringArgs(){
	var qs=(location.search.length>0?location.search.substr(1):"");
	var args={};
	var items=qs.length?qs.split("&"):[];
	var item=null,name=null,value=null;
	var i=0,len=items.length
	for(i=0;i<len;i++){
		item=items[i].split("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
		if(name.length){
			args[name]=value;
		}
	}
	return args;
}


