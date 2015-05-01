// 1. 自动追加新的元素

var numberArray=new Array();
for (var i=0;i<100;i++)
{
	numberArray[numberArray.length]=i;
}

console.log(numberArray);

console.log(Array.isArray(numberArray));


// 2. toString() toString() alert()

var person={
	toString: function(){
		return "mike";
	},
	toLocalString: function(){
		return "Minkai";
	}
};

person.toString();

person.toLocalString();
// 调用了toLocalString方法
alert(person);  
// 实际调用了toString方法

["read","write","listen","speak"].join("//");

// 3. 栈与队列

var colors=["red","green","blue"];
colors.push("black");
var item=colors.pop();
console.log(item);

// shift 从数组[0]位置删除一个元素， unshift()增加一个元素到0位置，其余的位置后移
item=colors.shift();
colors.unshift("yellow");

console.log(colors);

// 4.数组比较

var number=[0,10,23,1,52,464];
var sorted=number.sort();
console.log(sorted);   //[0, 1, 10, 23, 464, 52]

var correctSorted=number.sort(function(val1,val2){
	if(val1>val2)
		return 1;
	else if(val2>val1)
		return -1;
	else 
		return 0;
});

console.log(correctSorted);