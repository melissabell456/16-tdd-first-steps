"use strict";

const { argv: [,, ...nums] } = process;
const sum = require('./add.js')(nums);
const difference = require('./subtract.js')(nums);
const quotient = require('./divide.js')(nums);
const product = require('./multiply.js')(nums);

console.log("sum!", sum);
console.log("difference!", difference);
console.log("quotient!", quotient);
console.log("product!", product);