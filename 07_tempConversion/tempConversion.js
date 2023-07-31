const convertToCelsius = function(X) {
  let choke = (X - 32) * 5 / 9 
  return Math.round(choke * 10) / 10
};

const convertToFahrenheit = function(Y) { 
 let val = (Y * 9 / 5 + 32)
  return Math.round(val * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
