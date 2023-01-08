const palindromes = function (string) {
    let array = Array.from(string.toLowerCase());
    let stringTest = '';
    for(let i = 0; i <= array.length -1; i++){
        if(array[i] == " " || array[i] == "," || array[i]== "." || array[i] == "!" || array[i] == "?"){
            continue;
        } else {
            stringTest += array[i]
        }
    }
    let stringReverse = Array.from(stringTest).reverse().join("")
    return stringTest == stringReverse
};

// Do not edit below this line
module.exports = palindromes;


