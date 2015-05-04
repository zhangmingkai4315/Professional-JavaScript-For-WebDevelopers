1. 闭包

当函数被调用时，创建执行环境和作用域链：
比如函数 
function test(name,age){
	return name+age;
}

调用时（本地的this!） arguments ,name ,age, 放在了调用的第一位上，全局变量放在第二位上
本地环境变量会随着函数的终止而结束。销毁，全局变量则一直保存在作用链中顶层 直到程序退出。

闭包的不同之处，如下：
function createComparisonFunction(property){
	return function(object1,object2){
		var value1=object1[property];
		var value2=object2[property];
		if(value1<value2)
			return -1;
		else if(value2<value1)
			return 1;
		else 
			return 0;
	};

};

当调用 var compare=createComparisonFunction("name")
	  var result=compare({name:"Nico"},{name:"Greg"});

	  匿名函数的作用域基本将包含三层关系： 1. 函数本身的参数和变量,本地this 2. createComparisonFunction的环境参数和对象 3 全局

	  由于匿名函数仍旧有效，调用的函数createComparisonFuncrtion 也不会失效。
	  
	  如果将 compare=null 则等于回收了该内存。过度使用闭包将导致内存消耗过快

3. javascript不会告诉你声明了重复多次的变量，后面的声明将会被忽略 而且有些环境下变量不会被销毁


for(var i=0;i<10;i++)
	console.log('i='+i);
var i;
alert(i);

4. 块级别作用域

(function(){
	alert("Je");
})()

多使用块级别作用域将 减少想全局环境变量增加内容


5. 如何使用静态函数变量 

6. 单例模式“

只产生一个实例的对象

var application=function(){
	var components=new Array();
	components.push(new BaseComponent());
	return {
		getComponentCount:function(){
			return components.length;
		},
		registerComponent:function(component){
			if(typeof component=="object"){
				components.push(component);
			}
		}

	};
}();


直接运行后，返回一个对象 这个对象包含了私用的静态变量，和数组。由于直接运行 ，则不会产生第二个实例

返回的对象方法包含了 访问静态对象的 开放接口


