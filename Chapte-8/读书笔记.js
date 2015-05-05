1. 
window.color=["red","blue"];
delete window.color
在IE<9的版本中报错 由于包含了Object.defineProperties(color, {Configurable:false})
2. 
window.moveTo(0，0)  window.moveBy(0,100)
可能被浏览器禁用
关于弹窗，如何检测是否被用户屏蔽：
var blocked=false;
try{
	var winx=window.open("http://www.baidu.com","_blank");
	if(winx==null){
		blocked=true;
	}
}catch(ex){
	blocked=true;
}

if(blocked){
	alert("The popup was blocked");
}


3. setInterval();  setTimeout()


 使用超时调用模拟间隔调用，保证了不会出现间隔调用的时候重叠出现的问题
 代码见示例

4. 三种弹出窗口  


var result=prompt("what is your name?");
if(result!==null){
	alert("welcome:"+result);
}


5. window.print()直接调出打印框
window.find()
location.reload()
location.href()
location.reload(true)
location.search="?q=java"
location.hash="#section1";
location.pathname="mydir"

6.
 history.go(-1)
 history.go(1)
 history.back()
 history.forward()

 if(history.length==1)
 {
 	alert("first page");
 }


7. 

screen.height
1080
screen.width
1920
screen.availHeight
992
screen.availWidth
1920

navigator.appName
"Netscape"
navigator.oscpu
undefined
navigator.cookieEnabled
true
navigator.platform
"MacIntel"
navigator.userAgent
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36"
navigator.vendor
"Google Inc."




