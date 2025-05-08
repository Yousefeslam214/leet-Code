/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ")
    // s = s.split(" ")
    s = s[s.length - 1].split("");
    // s = s.split("")
    return s.length
};


console.log(lengthOfLastWord("Hello World"))