const repeatString = function(string, num) {    
    let outputString = '';
    if (num < 0) {
        return 'ERROR';
    }
    else {
        for (x = 0; x < num; x++) {
            outputString += string;
        }
        return outputString;
        }
    };

// Do not edit below this line
module.exports = repeatString;
