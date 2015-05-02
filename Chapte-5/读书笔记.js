1. 对象字面量的形式创建一个对象
var person={
	"name":"Mike",
	"age":26,
	5:12
};

上例中5将被转换为字符串类型

2. 访问对象的方式可以使用传统的 person.name  或者是 person["name"]


3. Array数组：
var array1=new Array(20);
var array2=new Array("20","10","34",);

对于array2不同浏览器处理不同 最后一个可能存在可能不存在

如何增加数组：
var numberArray=new Array();
for (var i=0;i<100;i++)
{
	numberArray[numberArray.length]=i;
}

判断一个数组是否是数组 最好使用Array.isArray(Object);
否则在跨框架验证时使用instancof 将不能被正确验证

4. toString() toString() alert() 函数在使用上的区别

person.toString();
//调用对象的toString方法
person.toLocalString();
// 调用了toLocalString方法
alert(person);  
// 实际调用了toString方法


5. 栈 是LIFO 后入先出  队列 是 FIFO 先入先出
代码示例如example-1

6 比较函数

var correctSorted=number.sort(function(val1,val2){
	if(val1>val2)
		return 1;
	else if(val2>val1)
		return -1;
	else 
		return 0;
});


7. slice()  splice(index, howMany)

slice是选择范围
splice(index, howMany,*,*,*...) 则可以插入替换删除等操作


8 indexOf(searchValue)  lastIndexOf(searchValue) 两者都是必须使用全等进行比较 ===

9  every(callback)  some(callback) map(callback) filter(callback) .forEach

10.function的概念

function都是Function对象的实例，可通过：

var sum=function(){

};

或者是 
function sum(){

}

或者  new Function("arg1","arg2","return arg1+arg2;");
但是第二种有双重解释的性能问题，第二次解释 函数体

11. 函数声明和函数表达式
所有的程序执行前需要将函数声明引入，比如：

alert(sum());
function sum(){
	return "sum function";
}
可以正常执行，但是如下的则不可以：

alert(sum1());
var sum1=function(){
	return "sum";
}

// TypeError: undefined is not a function

12. encodeURI(URI) encodeURIComponent(URI)

var httpUrl="http://www.baidu.com/hello world.html";
encodeURI(httpUrl);
encodeURIComponent(httpUrl);

// 只对空格变换，和 对所有的非字符变换

encodeURI(httpUrl);
"http://www.baidu.com/hello%20world.html"
encodeURIComponent(httpUrl);
"http%3A%2F%2Fwww.baidu.com%2Fhello%20world.html"


13. eval 与执行环境息息相关。

var msg="hello";

eval("alert(msg)");

13. 不要使用Boolean对象创建boolean类型 

比如 当使用 var falseObject=new Boolean(false);
falseObject&&true
// true 因为所有的对象在转换为boolean时均未true
