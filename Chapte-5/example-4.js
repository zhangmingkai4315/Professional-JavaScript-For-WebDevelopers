function sum(num1,num2){
	return num1+num2;
}

function callSum1(num1,num2){
	return sum.apply(this,arguments);
}

function callSum2(num1,num2){
	return sum.apply(this,[num1,num2]);
}

function callSum3(num1,num2){
	return sum.call(this,num1,num2);
}

callSum1(10,20);
callSum2(20,10);
callSum3(10,20);


window.color="red";

function sayColor(){
	console.log(color);
}
sayColor.call(this);

var env={color:"blue"};

sayColor.call(env);



var numbers=[10,232,2,34,2,45,2,45,2,5];
var max=Math.max.apply(Math,numbers);

Math.max(10,2,4,3,5,2);

// Math.floor()  Math.ceil()  Math.round() 


var string1="    Hello  worlde   ";

var string2=string1.trim();