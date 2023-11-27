/*var str = "Hello World without built-in module";
var res = str.toUpperCase();
console.log(res);*/

var uc = require('upper-case');
var str = "Hello World using built-in module";
res=uc.upperCase(str);
console.log(res);