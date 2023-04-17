// 要求匹配如下时间：
// 23:59
// 02:07
// 2:7 => 前面的 0 可以省略

var regexp = /^(0?[0-9]|[1][0-9]|[2][0-3]):(0?[0-9]|[1-6][0-9])$/;
console.log(regexp.test("23:59"));
console.log(regexp.test("02:07"));
console.log(regexp.test("2:7"));
