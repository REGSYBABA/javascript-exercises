const repeatString = function(word, times) {
    if (times < 0){
        return 'ERROR'
    }
    let returnString = ''
    for (let i = 0; i < times;  i++){
        returnString += word
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
