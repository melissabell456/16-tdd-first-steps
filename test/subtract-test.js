const { assert: {isNumber, isNotNaN, isFunction} } = require('chai');
const subtract = require('../lib/subtract');

describe("subtract", () => {
  it('should be a function', () => {
    isFunction(subtract);
  });
  it('should return an integer', () => {
    isNumber(subtract([ 1, 2 ]), "when receiving 2 ints");
    isNumber(subtract([ -1, 2 ]), "when receiving 2 ints, 1 neg");
    isNumber(subtract([ -1, 2.55 ]), "when receiving 2 ints, 1 neg, 1 dec");
    isNumber(subtract([ "1", 2 ]), "when receiving 1 string and 1 int");
    isNumber(subtract([ "1", 2.88 ]), "when receiving 1 string and 1 dec int");
    isNumber(subtract([ "1", -2 ]), "when receiving 1 string and 1 neg int");
    isNumber(subtract([ 1, "2" ]), "when receiving 1 int and 1 string");
    isNumber(subtract([ "1", "2" ]), "when receiving 2 strings");
    isNumber(subtract([ "1", "-2" ]), "when receiving 2 strings, 1 neg");
    isNumber(subtract([ "1" ]), "when receiving 1 string");
    isNumber(subtract([ "-1" ]), "when receiving 1 neg string");
    isNumber(subtract([ ".1" ]), "when receiving 1 dec string");
    isNumber(subtract([ .1 ]), "when receiving 1 dec");
    isNumber(subtract([ -1 ]), "when receiving 1 neg");
    isNumber(subtract([ 1 ]), "when receiving 1 int");
    isNotNaN(subtract([ "1", 2 ]), "is NotNaN when receiving 1 string and 1 int");
    isNotNaN(subtract([ 1, 2 ]), "is NotNaN when receiving 2 ints");
    isNotNaN(subtract([ 1, "2" ]), "is NotNaN when receiving 1 int and 1 string");
    isNotNaN(subtract([ "1", "2" ]), "is NotNaN when receiving 2 strings");
  });
});