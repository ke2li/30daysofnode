var assert = require('assert');
var a =10;
var b= 12;
var c= '10';

assert.notDeepEqual(a,b,"Nothing printed because they are using !== for comparison");
assert.notDeepEqual(a,b,"ERror because values match here");