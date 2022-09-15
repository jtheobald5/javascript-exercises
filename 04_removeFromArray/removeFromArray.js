const removeFromArray = function(array) {
    const newArray = [];
    const argumentArray = [];
    for (i = 0; i < arguments.length; i++) {
        argumentArray[i] = arguments[i];
    }
    for (i = 0; i < array.length; i++) {
        if (!argumentArray.find(array[i])) {
            newArray += array[i];
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
