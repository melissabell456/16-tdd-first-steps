"use strict";

const { argv: [,, ...nums] } = process;
const sum = require('./add.js')(nums);
const difference = require('./subtract.js')(nums);

console.log("sum!", sum);
console.log("difference!", difference);