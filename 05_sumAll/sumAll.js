const sumAll = function(num1, num2) {
    let outputNum = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else {
        if (num1 < num2) {
            for (x = num1; x <= num2; x++) {
                outputNum += x;
            }
            return outputNum;
        }
        else {
            for (x = num2; x <= num1; x++) {
                outputNum += x;
            }
            return outputNum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
