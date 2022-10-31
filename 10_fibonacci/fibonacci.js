const fibonacci = function(input) {
    let array = [0, 1];
    if (input < 0) return "OOPS";
    else {
        for (i = input; i >= 0; i--) {
            array.push(Number(array[array.length-2]) + Number(array[array.length-1]));
        }
        return array[input];
    }
};

// Do not edit below this line
module.exports = fibonacci;
