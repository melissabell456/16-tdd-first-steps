"use strict"

module.exports = ([ int1, int2 ]) => {
  if (!int2) int2 = 0;
  return +int1/+int2;
};