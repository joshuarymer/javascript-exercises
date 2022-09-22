const removeFromArray = function(array, ...args ) {
    let index;
    for (const arg of args) {
        for (const element of array) {
            if (arg === element) {
                index = array.indexOf(arg);
                array.splice(index, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
