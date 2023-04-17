/**
 * 多选分支，表示多个匹配模式任选其一。
 * 具体形式如下：(p1|p2|p3)，其中 p1、p2 和 p3 是子模式，用 |（管道符）分隔，表示其中任何之一。
 */

var regex = /good|nice/g;
var string = "good idea, nice try.";
console.log(string.match(regex));
