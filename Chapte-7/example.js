function createComparisonFunction(property){
	return function(object1,object2){
		var value1=object1[property];
		var value2=object2[property];
		if(value1<value2)
			return -1;
		else if(value2<value1)
			return 1;
		else 
			return 0;
	};

};

var compare=createComparisonFunction("name")
var result=compare({name:"Nico"},{name:"Greg"});


compare=null;


// 2. 
var name="this window";
var object={
	name:"My object",
	getNameFunc:function(){
		return function(){
			return this.name;
		}
	}
};

alert(object.getNameFunc()());   //this window 因为执行时候的this 不会包含进第一层的环境中 就好像arguments一样

var name="this window";
var object={
	name:"My object",
	getNameFunc:function(){
		var that=this;
		return function(){
			return that.name;
		}
	}
};

alert(object.getNameFunc()());   //my object


3. function outPutNumber(count){
	(function(){
		for (var i = 0; i < 10; i++) {
			console.log('i='+i);
		}
	})();
	alert(i);  //隔离开了
}

// 4. 静态对象 ,闭包实现静态

(function(){
	var staticName="";
	Person=function(value){
		staticName=value;
	};
	Person.prototype.setName=function(value){
		staticName=value;
	};
	Person.prototype.getName=function(){
		return staticName;
	};
})();

var person1=new Person("Mike");
var person2=new Person("Cale");

person1.setName("nill");
person2.getName();


// 5. 单例模式：

var application=function(){
	var components=new Array();
	components.push(new BaseComponent());
	return {
		getComponentCount:function(){
			return components.length;
		},
		registerComponent:function(component){
			if(typeof component=="object"){
				components.push(component);
			}
		}

	};
}();

