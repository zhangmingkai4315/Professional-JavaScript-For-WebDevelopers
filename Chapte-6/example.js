// 1. property of class
var person={
};

Object.defineProperty(person,"name",{
	writable:false,
	configurable:false,
	value:"nica"
});

定义了一个只写的变量

person.name="mike";
delete person.name;

console.log(person.name);

// 2. 创建对象
// 工厂模式
function createPerson(name,age,job){
	var o={};
	o.name=name;
	o.age=age;
	o.job=job;
	o.info=function(){
		console.log(o.name+" "+o.age+" "+o.job);
	};

	return o;
}

var person1=createPerson("Nike",23,"SE");
var person2=createPerson("Mike",32,"Doctor");


// 构造函数模型

function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.info=function(){
		console.log("....");
	};
}

var person3=new Person("Nike",23,"SE");
var person4=new Person("Mike",32,"Doctor");
// 每次都重新创建了函数及声明

// 构造函数改进版
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.info=infoG
}

function infoG(){
	console.log("....");
};



// 使用prototype

function person={

}；

person.prototype.name="Nico";
person.prototype.age=29;
person.prototype.job="SE";
person.prototype.sayName={
	return this.name;
};

//如何判断一个函数是在原型系统还是自定义系统

//  hasOwnProperty(property) 
//  property in person1  in 包含所有的继承属性
//  只存在于原型而不是被覆盖
function hasPrototypeProperty(object,name){
	return !object.hasOwnProperty(name)&&(name in object);
}

Object.keys(person.prototype)
// ["name", "age", "job", "sayName"]
Object.getOwnPropertyNames(person.prototype)
// ["constructor", "name", "age", "job", "sayName"]

// constructor为不可枚举的属性 但是getOwn..可以获得并显示




// 5. 组合使用构造函数模式和原型模式


function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.friends=["Shel"];
	
};

Person.prototype={
	constructor:Person,
	sayName:function(){
		return this.name;
	}
}


var person1=new Person('Nico',25,"worker");
var person2=new Person('Mike',24,"doc");

person1.friends.push("Maruy");

alert(person1.sayName==person2.sayName);


