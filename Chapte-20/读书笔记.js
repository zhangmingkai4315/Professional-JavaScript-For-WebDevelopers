var person={
	name:"Nico",
	ageL:29
};

json的表示方式如下

{
	"name":"Nico",
	"age":29,
	"school":{
		"name":"Merr",
		"location":"Chicgo"
	}
	
}

json的数组表示方式：

[
	{  
	    "name":"Nico",
		"age":29,
		"school":{
			"name":"Merr",
			"location":"Chicgo"
		}

	},
	{
		"name":"Mike",
		"age":21,
		"school":{
			"name":"DC",
			"location":"Chicgo"
		}

	},
	{
		"name":"Click",
		"age":22,
		"school":{
			"name":"DC",
			"location":"Chicgo"
		}

	}
]


JSON对象的两个函数：

JSON.stringify(js对象,[过滤器])

比如当有个js对象

var person={
		name:"Mike",
		age:21,
		school:{
			name:"DC",
			location:"Chicgo"
		}
	}

	var jsonText=JSON.stringify(person)
	console.log(jsonText);

	var person1=JSON.parse(jsonText)
	console.log(person1);


stringify的高级用法:

1. 过滤器



