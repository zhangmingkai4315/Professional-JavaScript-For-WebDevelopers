1. javascript是严格的定义大小写敏感的代码

2. use strict将开启严格的编码要求：

　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
　　- 提高编译器效率，增加运行速度；
　　- 为未来新版本的Javascript做好铺垫。

	1. 无法删除对象 除非定义的时候配置为可删除
	2. 对于未声明的则报错
	3. 禁止八进制表示
	4. 正常情况下，如果对象中包含多个同名变量则覆盖，严格模式则禁止
	5. 对于禁止写的属性赋值则报错



	对于非严格模式 下：
	
		var obj = {};
	Object.defineProperties(obj, {
	  "property1": {
	    value: true,
	    writable: true
	  },
	  "property2": {
	    value: "Hello",
	    writable: false
	  }});

	obj.property2=10;
	虽然不会报错 ，但是不会真的赋值。

	6. this 对象为undefined 

