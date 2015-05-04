
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


//2. 如何解决超类中存在的属性一旦被继承就变为共享的方法

function SuperType(){
	this.colors=["red","blue","green"];
}
function SubType(){

}

SubType.prototype=new SuperType();
var instance1=new SubType();
var instance2=new SubType();

instance1.colors.push("black");
alert(instance2.colors);  //数组变为了共享对象


//3. 改进 组合继承 

function SuperType(name){
	this.name=name;
	this.colors=["red","blue","green"];
}

SuperType.prototype.sayName=function(){
	alert(this.name);
}
function SubType(name,age){      
	SuperType.call(this,name);        //第二次调用SuperType() 获得一个自己的范围域，屏蔽了其他对象的共享
	this.age=age;
}

SubType.prototype=new SuperType();    //第一次调用SuperType() 获得属性的name colors
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
	alert(this.age);
}

var instance1=new SubType("Nic",24);
instance1.colors.push("black");
var instance2=new SubType("Greg",20);


//4 最新版 不必费心去调用超类的构造函数，而是考虑另一种解决办法  寄生组合式继承

function inheritPrototype(subType,superType){
	var prototype=Object(superType.prototype);
	prototype.constructor=subType;
	subType.prototype=prototype;
}


function Super(name){
	this.name=name;
	this.colors=['red','blue'];
}

SuperType.prototype.sayName=function(){
	return this.name;
}

function SubType(name,age){
	SuperType.call(this,name);
	this.age=age;
}


inheritPrototype(SubType,SuperType);

SubType.prototype.sayAge=function(){
	alert(this.age);
}


