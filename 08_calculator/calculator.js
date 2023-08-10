const add = function(val1, val2) {
	return val1 + val2
};

const subtract = function(val1, val2) {
	return val1 - val2
};

const sum = function(array) {
	return array.reduce((val1, item) => val1 + item, 0)
};

const multiply = function(array) {
  return array.reduce((val1, item) => val1 * item, 1)
};

const power = function(val1, val2) {
	return Math.pow(val1, val2)
};

const factorial = function(n) {
   if (n === 0)
   return 1
   let val = 1
	 for (let i = n; i > 0; i--) {val *= i}
   return val
};

const rfactorial = function(n){
  if (n === 0)
  return 1
  return n * rfactorial(n-1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
