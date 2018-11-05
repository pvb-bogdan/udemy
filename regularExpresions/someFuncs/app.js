// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

//first way to construct  a re is literal
let re;
re = /hello/i; // i flag after expression does not count  uppercase or lowercase - case insensitive
// re = /hello/g; // flag g is Global search - search for all instances of your string not just the first

//calling the constructor
// re = new RegExp('hello');

// console.log(re); // /hello/
// console.log(re.source);// hello

// exec() - returns result in an array or null
// trying to match re whit the string in exec() 
// const result = re.exec('hello world'); // return an array ["hello", index: 0, input: "hello world", groups: undefined]
// console.log(result);
// console.log(result[0]); // hello
// console.log(result.index); // 0
// console.log(result.input); // hello world

// test() - return true / false
// const result = re.test('Hello');
// console.log(result); // true

// match() returns result array or null - match an array to your re
// const str  = 'Hello there';
// const result = str.match(re);
// console.log(result);


// serach() - return index of the first match and if not find returns -1
// const str  = ' starts Hello there';
// const result = str.search(re);
// console.log(result);

// replace() return a new str with some or all matches of a pattern
const str  = 'Hello there';
const result = str.replace(re, 'salut');
console.log(result);