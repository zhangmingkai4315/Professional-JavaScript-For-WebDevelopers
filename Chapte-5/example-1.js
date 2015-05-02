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


// 5. concat()  slice() splice()

var concat1=colors.concat(["hello","world"]);
colors=["yellow", "green", "blue"]
colors.slice(0,2);
// ["yellow", "green"]
//包含【0，2）范围的数组

// 开始位置追加
colors.splice(0,0,"black","grey"); 

// 6. every(callback)  some(callback) map(callback) filter(callback) .forEach

var numbers=[1,2,3,4,5,4,3,2,1];

var everyResult=numbers.every(function(item){return item>2;});
var someResult=numbers.some(function(item){return item>2;})
var mapResult=numbers.map(function(item){return item*2;})
var filterResult=numbers.filter(function(item){
	return item>2;
});

var forEachResult=numbers.forEach(function(item){
	console.log(item);
})

// everyResult
// false
// someResult
// true
// filterResult
// [3, 4, 5, 4, 3]
// mapResult
// [2, 4, 6, 8, 10, 8, 6, 4, 2]


// 7. reduce函数

var reduceResult=numbers.reduce(function(pre,cur,index,array){
	return pre+cur;
});


//注意一定要0-11代表 1月到12月
var data=new Date(2010,0,1);
data.toLocaleDateString();
// "2010/1/1"
data.toUTCString();
// "Thu, 31 Dec 2009 16:00:00 GMT"