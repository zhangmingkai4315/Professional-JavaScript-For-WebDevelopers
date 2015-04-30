// 基本类型值和引用类型值
基本类型值即基本的 Number String boolean undefined null NaN
无法动态的修改其属性增加删除，

var a=5;
var b=a;
a=10;
b 
5 值不会变

var c=new Object();
var d=c;
c.name="mingkai";
d;

引用赋值时讲对象的内存位置进行了复制，所以两者保存的是相同的对象

所有引用类型的值当检测instanceof Object 均返回true

web环境中的全局环境对象为 window 

对于javascript的链式搜索，先访问当前的环境，如果没有则向上搜索外围的环境


垃圾回收机制：

1. 标记清除
2. 引用计数  存在循环引用的问题 ：ie的BOM和DOM实现上采用了c++的COM组件 而COM组件采用了引用计数的

手工设置为null 将在下个收集循环中消除
不同浏览器中可手动启动垃圾回收

IE7采用了动态的门限，若是超过85%则翻倍门限值，若是低于15%则返回默认值

管理内存：浏览器的内存一般比较小，无法达到桌面应用的范围，所以必要时需要手动的删除解除邦迪


var globalPerson=new Person();
...
//不在使用
globalPerson=null