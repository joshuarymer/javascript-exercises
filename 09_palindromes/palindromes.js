const palindromes = function(string) {
    string = string
                .replaceAll('!','')
                .replaceAll(',', '')
                .replaceAll('.', '')
                .replaceAll(' ', '');
            
    string = string.toLowerCase();
    const newArray = string.split("");
        let output = '';
        for(i = newArray.length-1; i >= 0; i--) {
            output += newArray[i];
        } 
        if(output === string) {return true;}
        else {return false;}
    };

// Do not edit below this line
module.exports = palindromes;
