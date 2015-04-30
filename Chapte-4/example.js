var a=5;
var b=a;
a=10;
b 

var c=new Object();
var d=c;
c.name="mingkai";
d;


function setName(obj){
	obj.name="mingkai";
	obj=new Object();
	obj.name="test";
}

var person=new Object();
setName(person);
person.name;