const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const sum = function(array) {
	let sum1 = 0;
	for (i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  return sum1;
};

const multiply = function(array) {
  let sum = 1;
	for (i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

const power = function(num1, num2) {
  return (num1 ** num2)
};

const factorial = function(num1) {
  let sum = 1;
	for (i = num1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
