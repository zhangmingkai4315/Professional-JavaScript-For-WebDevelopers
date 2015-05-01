var re=null,i;
for (var i = 0; i < 10; i++) {
	re=/cat/g;
	re.test("catastrophe");
}

for(i=0;i<10;i++){
	re=new RegExp("cat","g");
	re.test("catastrophe");
}

//以上两种方式均可，这是在ECMA5中规定的 使用字面量必须如同使用一个新的对象一样


var text="Mom and dad and baby";
var pattern=/mom( and dad( and baby)?)?)/gi;

var matches=pattern.exec(text);
// matches
// ["Mom and dad and baby", " and dad and baby", " and baby"]

matches.index
// 0
matches.input
// "Mom and dad and baby"


var text="this has been a short summer";
var pattern=/(..)or(.)/g;
if(pattern.test(text)){
	alert(RegExp.$1);
	alert(RegExp.$2);
	alert(RegExp.lastMatch);
	alert(RegExp.lastParen);
	alert(RegExp.leftContext);
	alert(RegExp.rightContext);
}




function htmlEscape(text){
	return text.replace(/[<>"&\\]/g,function(match,pos,origin){
		switch(match){
			case "<":
				return "&lt;";
				break;
			case ">":
				return "&gt;";
				break;
			case "&":
				return "&amp;";
				break;
			case "\":
				return "&quot;";
				break;	
			default:	
				break;
		}
	});
}


htmlEscape("<p class="greating">hello world!</p>");