// es5 

var a=3
(function(){
	var a=4;
	console.log(a)
})();
console.log(a)

// es6 

var b=3;
{
	let b=4
	console.log(b)
}
console.log(b)
// 4
// 3
// 4
// 3
console.log(c)
let c=10


///////////////////


var funcArry=[]
for(let i=0;i<10;i++){
  funcArry.push(function(){console.log(i)})
}

funcArry[3]()

// 3

var funcArry=[]
for(var i=0;i<10;i++){
  funcArry.push(function(){console.log(i)})
}

funcArry[3]()

// 10

///////////////////

// const声明

const a=[1,2,3,4,5,6]
a.push(10)
console.log(a)  //[1,2,3,4,5,6,10]


// spread and rest表达式

function example(a,b,c){
  console.log(a,b,c)
}

example(...[1,2,3])  //1,2,3

// =》等价于

example.apply(undefined,[1,2,3])

var c=[1,2,3]
var d=[1,...c,10]
console.log(d)  //[1,1,2,3,10]

var a=function(x,y,...a){
  console.log(x,y,a)
}

a(10,11,2,3,4)   //10,11,[2,3,4]


//缺省参数

function a(x=10,y=11){
  console.log(x,y)
}
a(undefined,12)

// =》等价于

"use strict";

function a() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? 11 : arguments[1];
  console.log(x, y);
}
a(undefined, 12);


// 解构参数

function a(){
  return {
    x:1,y:12
  }
}
var {x:y,y:x}=a()
console.log(x,y) //12 1  当创建一个解构的时候依照对象字面量分配参数

function a(){
  return {
    x:1,y:12
  }
}
var {y:y1,x:x1}=a() // 其中x,y为原来的对象的属性名称 y1,x1为现有域的变量名称

console.log(x1,y1) //12 1

"use strict";

function a() {
  return {
    x: 1, y: 12
  };
}

var _a = a();

var y1 = _a.y;

//////////////

缺省赋值以及解构
x=10为缺省值，当传递对象中包含x的时候 替换值

function f6({x=10}={},{y}={y:10}){
     console.log( x, y );
}
f6({x:12});  //12 10

///////////////////////////


var x=30
var o={
  f1(){
    console.log(this.x)
  },
  f2(){
    console.log(this.x++)
  },
  x
}

console.log(o.x)
o.f2()
console.log(o.x)


//等价于
"use strict";

var x = 30;
var o = {
  f1: function f1() {
    console.log(this.x);
  },
  f2: function f2() {
    console.log(this.x++);
  },
  x: x
};

console.log(o.x);  //30
o.f2();
console.log(o.x);  //31


/////////////////////get and set method
var o={
  _a:10,
  get a(){
    return this._a;
  },
  set a(value){
    this._a=value
  }
}
 
console.log(o.a)   //10
o.a=100
console.log(o.a)   //100

// 等价于 ：：
var o = Object.defineProperties({
  _a: 10
}, {
  a: {
    get: function get() {
      return this._a;
    },
    set: function set(value) {
      this._a = value;
    },
    configurable: true,
    enumerable: true
  }
});
///////////////////

var name="Mike";
var welcome=`Hello ${name}`;
console.log(welcome)          //Hello Mike
console.log(typeof welcome)  //string

// 使用模板替换
// 模板支持自动换行符插入

var words=` my name is 
${name},from beijing
`
// 等价于 var words = " my name is \n"+mike+",from beijing\n";


var {a,b}={a:10,b:10}
var sum=function(a=10,b=100){
  return a+b
}
var c=`${sum(a,b)}`
console.log(c)   //20



/////////////////// 



function dollabillsyall(strings, ...values) { 
  return strings.reduce( function(s,v,idx){
      if(idx>0){
        if (typeof values[idx-1] == "number") {
        // look, also using interpolated
        // string literals!
        s += `$${values[idx-1].toFixed( 2 )}`;
      } else {
        s += values[idx-1];
      }
}
return s + v; },"");
}
var amt1 = 11.99,
amt2 = amt1 * 1.08, name = "Kyle";
var text = dollabillsyall
`Thanks for your purchase, ${name}! Your product cost was ${amt1}, which with tax comes out to ${amt2}.`
console.log( text );


//////////////////fat array

var x=(a)=>a+1
console.log(x(10))

var f1=(x,y)=>{
  return x+y
}
console.log(f1(1,2))

var arr=[1,2,3,4,5,6,6]
arr=arr.map(x=>x*x)
console.log(arr)

// 11
// 3
// [1,4,9,16,25,36,36]

var dollabillsyall = (strings, ...values) =>

strings.reduce( (s,v,idx) => {
if(idx>0){

if (typeof values[idx-1] == "number") {
s += `$${values[idx-1].toFixed( 2 )}`;
} else {
    s += values[idx-1];
  }
}

return s + v;
},"");



/////////////for ...of 

var a=["a","b","c"]
for (var x in a){
  console.log(x)
}  //0 1 2

for (var x of a){
  console.log(x)
}  //a b c

var aa=[{x:11},{x:22},{x:33}]
for ({x:a} of aa){
  console.log(a)
}   //11 22 33
