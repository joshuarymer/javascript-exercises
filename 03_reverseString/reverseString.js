const reverseString = function(string) {
    let outputString = '';
    for (let x = 0; x < string.length; x++) {
        outputString += string.charAt((string.length-1)-x);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
