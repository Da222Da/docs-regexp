/**
 * 量词也称重复。常见量词形式如下：
 *  - {m,n} 表示出现 m - n 次。
 *  - {m,} 表示至少出现 m 次。
 *  - {m} 等价于 {m,m}，表示出现 m 次。
 *  - ? 等价于 {0,1}，表示出现或者不出现。
 *  - + 等价于 {1,}，表示出现至少一次。
 *  - * 等价于 {0,}，表示出现任意次，有可能不出现。
 *
 *  上述量词，会尽可能多的匹配，反正只要在能力范围内，越多越好，俗称“贪婪匹配”。
 *  然而，只需在量词后面加上?，例如{m,n}?。它就会尽可能少的匹配，反正只要在能力范围内，越少越好，俗称“惰性匹配”。
 */

 var string = "123 1234 12345 123456";

 // 贪婪匹配
 var regex1 = /\d{2,5}/g;
 console.log(string.match(regex1)); // => ["123", "1234", "12345", "12345"]
 
 // 惰性匹配
 var regex2 = /\d{2,5}?/g;
 console.log(string.match(regex2)); // => ["12", "12", "34", "12", "34", "12", "34", "56"]
 