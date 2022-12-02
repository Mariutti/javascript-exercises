const removeFromArray = function(array, ...itensToRemove) {
    let array2 = [];
    let arrayToRemove = Array.from(itensToRemove);
    for (let i = 0; i < array.length; i++) {
    if (arrayToRemove.includes(array[i])) {
        continue;
    } else {
        array2.push(array[i]);
    }
    }
    console.log(array2);
    return array2
};

// Do not edit below this line
module.exports = removeFromArray;
