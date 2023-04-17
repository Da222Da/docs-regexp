// 要求匹配 yyyy-mm-dd 格式的日期：
// 2017-06-10

var regexp = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log(regexp.test("2017-06-10")); // true
console.log(regexp.test("2017-00-00")); // false
