const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const reducer = array.reduce((a, b) => a + b, 0);
  return reducer;

};

const multiply = function(array) {
	const reducer = array.reduce((a, b) => a * b);
  return reducer;
};

const power = function(a, b) {
  // Using loop rather than Math.pow 
  let num = a
  for (i = 1; i < b; i++) {
    num *= a;
  }
  return num;
};

const factorial = function(a) {
  let num = a;
  if(a === 0) {return 1;}
  else {
    for(i = a-1; i > 0; i--) {
      num *= i;
    }
    return num; 
  }
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
