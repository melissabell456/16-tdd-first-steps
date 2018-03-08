const { assert: {isFunction, isNumber, isNotNaN} } = require('chai');
const divide = require('../lib/divide');

describe("divide", () => {
  it('should be a function', () => {
    isFunction(divide);
  });
  it('should return an integer', () => {
    isNumber(divide([ 1, 2 ]), "when receiving 2 ints");
    isNumber(divide([ -1, 2 ]), "when receiving 2 ints, 1 neg");
    isNumber(divide([ -1, 2.55 ]), "when receiving 2 ints, 1 neg, 1 dec");
    isNumber(divide([ "1", 2 ]), "when receiving 1 string and 1 int");
    isNumber(divide([ "1", 2.88 ]), "when receiving 1 string and 1 dec int");
    isNumber(divide([ "1", -2 ]), "when receiving 1 string and 1 neg int");
    isNumber(divide([ 1, "2" ]), "when receiving 1 int and 1 string");
    isNumber(divide([ "1", "2" ]), "when receiving 2 strings");
    isNumber(divide([ "1", "-2" ]), "when receiving 2 strings, 1 neg");
    isNumber(divide([ "1" ]), "when receiving 1 string");
    isNumber(divide([ "-1" ]), "when receiving 1 neg string");
    isNumber(divide([ ".1" ]), "when receiving 1 dec string");
    isNumber(divide([ .1 ]), "when receiving 1 dec");
    isNumber(divide([ -1 ]), "when receiving 1 neg");
    isNumber(divide([ 1 ]), "when receiving 1 int");
    isNotNaN(divide([ "1", 2 ]), "is NotNaN when receiving 1 string and 1 int");
    isNotNaN(divide([ 1, 2 ]), "is NotNaN when receiving 2 ints");
    isNotNaN(divide([ 1, "2" ]), "is NotNaN when receiving 1 int and 1 string");
    isNotNaN(divide([ "1", "2" ]), "is NotNaN when receiving 2 strings");
  });
});