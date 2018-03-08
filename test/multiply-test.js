const { assert: {isFunction, isNumber, isNotNaN} } = require('chai');
const multiply = require('../lib/multiply');

describe("multiply", () => {
  it('should be a function', () => {
    isFunction(multiply);
  });
  it('should return an integer', () => {
    isNumber(multiply([ 1, 2 ]), "when receiving 2 ints");
    isNumber(multiply([ -1, 2 ]), "when receiving 2 ints, 1 neg");
    isNumber(multiply([ -1, 2.55 ]), "when receiving 2 ints, 1 neg, 1 dec");
    isNumber(multiply([ "1", 2 ]), "when receiving 1 string and 1 int");
    isNumber(multiply([ "1", 2.88 ]), "when receiving 1 string and 1 dec int");
    isNumber(multiply([ "1", -2 ]), "when receiving 1 string and 1 neg int");
    isNumber(multiply([ 1, "2" ]), "when receiving 1 int and 1 string");
    isNumber(multiply([ "1", "2" ]), "when receiving 2 strings");
    isNumber(multiply([ "1", "-2" ]), "when receiving 2 strings, 1 neg");
    isNumber(multiply([ "1" ]), "when receiving 1 string");
    isNumber(multiply([ "-1" ]), "when receiving 1 neg string");
    isNumber(multiply([ ".1" ]), "when receiving 1 dec string");
    isNumber(multiply([ .1 ]), "when receiving 1 dec");
    isNumber(multiply([ -1 ]), "when receiving 1 neg");
    isNumber(multiply([ 1 ]), "when receiving 1 int");
    isNotNaN(multiply([ "1", 2 ]), "is NotNaN when receiving 1 string and 1 int");
    isNotNaN(multiply([ 1, 2 ]), "is NotNaN when receiving 2 ints");
    isNotNaN(multiply([ 1, "2" ]), "is NotNaN when receiving 1 int and 1 string");
    isNotNaN(multiply([ "1", "2" ]), "is NotNaN when receiving 2 strings");
  });
});