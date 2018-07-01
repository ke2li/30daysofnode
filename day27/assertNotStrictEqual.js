var assert = require('assert');
var a =10;
var b = 10.25;
var c= '10';
var 10;

assert.notStrictEqual(a,b, "Nothing printed because they are using !== for comparison");
assert.notStrictEqual(a,c, "Nothing printed because its not a match");
assert.notStrictEqual(a,d, "Error because its a match");