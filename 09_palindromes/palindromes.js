const palindromes = function (string) {
    let newString = string.replace(/[\s+","+"!"+"."]/g, "").toLowerCase();
    for (i = 0; i < newString.length; i++) {
        if (newString !== newString.split("").reverse().join("")) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
