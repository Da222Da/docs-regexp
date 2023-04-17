// 要求匹配如下 16 进制的颜色值
// #ffbbad
// #Fc01DF
// #FFF
// #ffE

var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/;
console.log(regex.test("#ffbbad")); // true
console.log(regex.test("#Fc01DF")); // true
console.log(regex.test("#FFF")); // true
console.log(regex.test("#ffE")); // true
