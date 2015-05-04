1. 类的属性

类的属性包含：configurable,enumerable, writable,value 四类值 
var person={
	name:"Nico"
};
前三个将被定义为true,value定义为Nico


// Object.defineProperty(person2,"name",{writable:false,configurable:false,value:"nica"});
// Object {name: "nica"}
// person2
// Object {name: "nica"}
// delete person2.name
// false


2. 访问器属性
Get 和 Set属性标示只能通过对象方法取或者设置时需要调用的函数

var book={
	year:2004,
	edition:1,
};

Object.defineProperty(book,"year",{
	get:function(){
		return this._year;
	},
	set:function(newValue){
		if(newValue>2004)
			this.year=newValue;
			this.edition=this.edition+1;
	}
});


book._year=2005;
console.log(book.edition);

如果只定义一个属性，另一个也会变回不可设置属性，所以最好的方式是使用一个接口函数 
getValue() setValue()


3. 如何创建对象

工厂函数和构造函数的区别

	构造函数时候 ：

	当在浏览器中直接定义一个Person时，作用域改为了window 如下 
	Person("Jam",12,"Gamer");
	调用的时候变为了 window.info();

	或者 使用 var o=new Object();
	Person.call(o,"Jam",12,"Gamer");

	o.info();


	alert(person1.info== person2.info);   //false
	不同的构造函数将返回不同的函数对象

	或者是使用 如下的办法：
	function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.info=infoG
	}

	function infoG(){
		console.log("....");
	};

	这样则会将infoG作为一个单一的实现引入对象，但是是全局，且不易管理
	，不能有一个函数就创建一个全局对象

原型模型：

任何函数创建的时候都会同时创建一个prototype的属性，该属性指向了一个Person Prototy的对象，这个对象包含有创建的属性和构造函数，
构造函数又指向了原先的函数对象 .

每次实例化后 都是只创建了一个指针指向了原型系统，而如果使用hasOwnPerperty属性定义时则无法正确的获取到原型系统的内容，除非覆盖

在查找属性时，如果内部包含了此属性（覆盖），则不用去上一级进行查找。


function person={

}；

person.prototype.name="Nico";
person.prototype.age=29;
person.prototype.job="SE";
person.prototype.sayName={
	return this.name;
};

// person.prototype
// ===>  person {name: "Nico", age: 29, job: "SE", sayName: function}
// person.prototype.constructor
// ===>  function person(){

// }


Object.keys(person.prototype)
// ["name", "age", "job", "sayName"]
Object.getOwnPropertyNames(person.prototype)
// ["constructor", "name", "age", "job", "sayName"]


使用原型系统是，任何时候修改或者删除prototype都会变更整个的对象实例（注意不要重写prototype，如下）

function Person(){};
var friend=new Person();
Person.prototype={
	constructor:Person,
	name:"Nick",
	sayName:function(){
		alert(this.name);
	}
};

friend.sayName();


3. 原型与继承：

function SuperType(){
	this.property=true;
}
SuperType.prototype.getSuperValue=function(){
	return this.property;
}
function SubType(){

}

//重写了SubType的原型函数，并将其指向了SuperType的类型
//实现了继承
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function(){
	return !this.property;
}


var instance1=new SubType();
instance1.getSubValue();


实例中 其实所有的原型都是默认会指向new Object(),而如果你更改了一个新的对象实例则会变更形成一个原型的继承链
默认的都会使用isPrototype hasOwnProperty() toString toLocalString()这些Object()对象的方法


