const leapYears = function(val) {
//    if (val % 4 === 0){
//      return true
//     } else if (val % 4 !== 0){
//         return false
//     } else if (val % 100 === 0 && val % 400 === 0){
//         return true
//     }else if (90 % 100 === 0 || 90 % 400 !== 0){
//         return false
//     }else {return true}
       
    return val % 4 === 0 && (val % 100 !== 0) || (val % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;
