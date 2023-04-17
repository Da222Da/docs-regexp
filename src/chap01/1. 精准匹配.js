// 精准匹配，比如 /hello/，也只能匹配字符串中的 "hello" 这个子串。但是，正则表达式之所以强大，是因为其能实现模糊匹配。

var regex = /hello/;
console.log(regex.test("hello")); // true
