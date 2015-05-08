1. 使用选择符jQuery就是使用了CSS选择器来选择元素

var body=document.querySelector("body");
var myDiv=document.querySelector("#mydiv");
var selected=document.querySelector(".selected");
var img=document.body.querySelector('img.button');



mydiv=document.createElement("mydiv");

document.body.appendChild(mydiv);
mydiv.setAttribute("class","button");

document.body.querySelector('mydiv.button')



2. 基本的遍历操作

document.body.childElementCount
6// 同级别的六个元素，不包含子元素
document.body.firstElementChild
// <div hidden>....</div>

document.body.lastElementChild
// <div class="mudiv"></div>

document.body.previousElementSibling
// <head>.....</head>

document.body.nextElementSibling
// null


使用childNodes可以查看是否具有子元素，若是不存在子元素则直接使用nextElementSibling

3.  Class的操作与管理

document.body.className
"nochrome"
document.body.classList.add("test");
undefined
document.body.className
"nochrome test"
document.body.classList.toggle("test");
undefined
document.body.className
"nochrome"
如果是多个class则，className返回一个带有空格的字符串，“nochrome test”

document.body.classList.contains("test");
true



4. 焦点管理

button=document.getElementById("myButton");
button.focus();
alert(button.hasFocus());

5. 使用innerHTML和outerHTML会创建一个HTML解析器，创建和销毁解析器会带来性能上的损耗，所以尽量少用

6. 文档模式 IE中设置了多种文档模式对应了使用CSS和不同的文档类型

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


这样写可以达到的效果是如果安装了GCF，则使用GCF来渲染页面，如果没安装GCF，则使用最高版本的IE内核进行渲染。Google Chrome Frame（谷歌内嵌浏览器框架GCF）。
这个插件可以让用户的IE浏览器不变，但用户在浏览网页时，实际上使用的是Google Chrome浏览器内核，而且支持IE6、7、8等多个版本的IE浏览器。




7. 返回document的子元素列表
document.body.children.length