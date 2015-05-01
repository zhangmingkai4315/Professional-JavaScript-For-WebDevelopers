var data=[{name:"Zacha",age:24},{name:"Nic",age:29}];

function createComparisonFunction(property){
	return function(object1,object2){
		var val1=object1[property];
		var val2=object2[property];
		if(val1<val2){
			return -1;
		}else if(val1>val2){
			return 1;
		}else{
			return 0;
		}
	};
}

data.sort(createComparisonFunction("name"));
alert(data);

data.sort(createComparisonFunction("age"));
alert(data);



2. function factoria(num){
	if(num<=1){
		return 1;
	}else{
		return num*factoria(num-1);
	}
}

如何解耦此函数让不同的对象可以指向并运行 不具有模糊性

比如 var otherFunc=factoria;

otherFunc(19); 

function factoria(num){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}