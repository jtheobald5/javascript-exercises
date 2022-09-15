const findTheOldest = function(array) {
    let oldest = 0;
    let age = 0;
    let oldestName;
    for (i = 0; i < array.length; i++) {
        age = (array[i].yearOfDeath - array[i].yearOfBirth);
        if (age > oldest) {
            oldest = age;
            oldestName = array[i].name
        }
    }
    return oldestName;

    
};

// Do not edit below this line
module.exports = findTheOldest;
