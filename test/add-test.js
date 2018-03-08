const { assert: {isFunction, isNumber, isNotNaN} } = require('chai');
const add = require('../lib/add');

describe("add", () => {
  it('should be a function', () => {
    isFunction(add);
  });
  it('should return an integer', () => {
    isNumber(add([ 1, 2 ]), "when receiving 2 ints");
    isNumber(add([ -1, 2 ]), "when receiving 2 ints, 1 neg");
    isNumber(add([ -1, 2.55 ]), "when receiving 2 ints, 1 neg, 1 dec");
    isNumber(add([ "1", 2 ]), "when receiving 1 string and 1 int");
    isNumber(add([ "1", 2.88 ]), "when receiving 1 string and 1 dec int");
    isNumber(add([ "1", -2 ]), "when receiving 1 string and 1 neg int");
    isNumber(add([ 1, "2" ]), "when receiving 1 int and 1 string");
    isNumber(add([ "1", "2" ]), "when receiving 2 strings");
    isNumber(add([ "1", "-2" ]), "when receiving 2 strings, 1 neg");
    isNumber(add([ "1" ]), "when receiving 1 string");
    isNumber(add([ "-1" ]), "when receiving 1 neg string");
    isNumber(add([ ".1" ]), "when receiving 1 dec string");
    isNumber(add([ .1 ]), "when receiving 1 dec");
    isNumber(add([ -1 ]), "when receiving 1 neg");
    isNumber(add([ 1 ]), "when receiving 1 int");
    isNotNaN(add([ "1", 2 ]), "is NotNaN when receiving 1 string and 1 int");
    isNotNaN(add([ 1, 2 ]), "is NotNaN when receiving 2 ints");
    isNotNaN(add([ 1, "2" ]), "is NotNaN when receiving 1 int and 1 string");
    isNotNaN(add([ "1", "2" ]), "is NotNaN when receiving 2 strings");
  });
});