const sumAll = function(...args) {
    const array = Array.from(args);
    let sum = 0;
    let arrayTemp;
    if (array[0] < 0 || array[array.length-1] < 0 ||
         (typeof array[0] != 'number') || (typeof array[array.length-1] != 'number')){
        return 'ERROR'
    }
    
    
        

    if(array[0] > array[array.length-1]){
        arrayTemp = array[0];
        array[0] = array[array.length-1];
        array[array.length-1] = arrayTemp
    }
    for (let i = array[0]; i <= array[array.length -1] ; i++){
        sum += i
    }
    return sum
}

// Do not edit below this line
module.exports = sumAll;
