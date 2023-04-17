// 要求匹配：提取出 id="container"
// <div id="container" class="main"></div>

var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);