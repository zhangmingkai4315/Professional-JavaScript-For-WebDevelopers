
1.
	var result=("23"<"3")
	//true

	对于对象的比较如果有valueOf方法调用此方法后执行比较，如果没有使用toString方法

	// 对于等于号==标示比较值，===则要比较类型和值
	result=("44"==44) 
	// true
	result=("44"===44)
	// false

	// null和undefined值相等但类型不同
	null==undefined
	// true
	null===undefined
	// false

	true==1
	// true
	true==2
	// false

	// 逗号的顺序执行，赋值给最后一个数
	var a=(1,2,3,5,6);
	// undefined
	var a;
	// 6
2. 
	// Object1
	Object {name: "mingkai", city: "beijing"}
	with(object1){name="anybody";}
	with使用时会降低系统的性能，不建议使用
	// object1
	Object {name: "anybody", city: "beijing"}

3.

// switch 可以传入任何类型的数值，比如下面的例子依次执行判断，一旦返回true则停止
 var a=24;
switch(true){
	case a<10:
		console.log("a is less than 10");
		break;
	case a>10:
		console.log("a is bigger than 10");
		break;
	default:
		statements_def
		break;
}


