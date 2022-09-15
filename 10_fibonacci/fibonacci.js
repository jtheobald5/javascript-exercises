const fibonacci = function(number) {
    let total = 1;
    let oldTotal = 0;
    let newTotal;
    const totalArray = [];
    if (number < 0) {
        return "OOPS"
    }
    for (i = 0; i < number; i++) {
        newTotal = (total + oldTotal);
        totalArray.push(newTotal);
        total = oldTotal;
        oldTotal = newTotal;
    }
    return totalArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
