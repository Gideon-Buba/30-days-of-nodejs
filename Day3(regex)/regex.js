// Finding specific text

// const fs = require('fs');
// const fileName = 'data.txt';
// const string = fs.readFileSync(fileName).toString();
// const pattern = /man/gim;
// const myArray = string.match(pattern);
// const len = myArray.length

// console.log("Occurrences of pattern in the string is : " + len);


// finding number of tags

// var fs = require('fs');
// var filename = 'index.html';
// var str = fs.readFileSync(filename).toString();
// var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

// var myarray = str.match( pattern );
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);

// validating e-mails

// var str = 'bubaambore@gnail.com'
// var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// var res = str.match( pattern );
// if(res){
// 	console.log("Valid email address");
// }else{
// 	console.log("Please enter a valid email address");
// }


// validating passowrds 

var str = 'Aa#1aaabcde'
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = str.match( pattern );
if(res){
	console.log("Valid password");
}else{
	console.log("Not a valid password");
}
		

