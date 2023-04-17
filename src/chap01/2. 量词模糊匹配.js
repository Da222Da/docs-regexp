// 量词模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。
// 其实现的方式是使用量词。譬如 {m,n}，表示连续出现最少 m 次，最多 n 次。
// 比如正则 /ab{2,5}c/ 表示匹配这样一个字符串：第一个字符是 "a"，接下来是 2 到 5 个字符 "b"，最后是字符 "c"。

var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(regex)); // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]
