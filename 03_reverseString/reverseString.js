const reverseString = function(string) {
    let name = ""
    for (i = string.length; i >= 0; i--) {
        name += string.charAt(i);
    }
    return name;
}

// Do not edit below this line
module.exports = reverseString;
