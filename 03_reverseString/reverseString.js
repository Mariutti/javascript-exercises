const reverseString = function(string) {
    const stringToArray = string.split("");
    const arrayReverse = stringToArray.reverse();
    const arrayToString = arrayReverse.toString();
    const stringReverse = arrayToString.replaceAll(",","");
    return stringReverse
};

// Do not edit below this line
module.exports = reverseString;
