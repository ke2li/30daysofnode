var assert = require('assert');
assert.ok(true,"No error");
assert.ok(1, "no error");
assert.ok(false, "error");
assert.ok(0, "error");
var a = 10;
var b= 20;
assert(a>b, "A should be greater than B");