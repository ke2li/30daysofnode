var assert = require('assert');
var a = 10;
var b = '10';
var c= 10;
assert.notDeepStrictEqual(a,b, "No error because they are not checking for deep equal");
assert.notDeepStrictEqual(a,c, "Error because values are equal");
