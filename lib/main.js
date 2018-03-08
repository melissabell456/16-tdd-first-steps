"use strict";

const { argv: [,, ...nums] } = process;
const sum = require('./add.js')(nums);

console.log(sum);