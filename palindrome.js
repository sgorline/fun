/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let isPalindrome = true;
    s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    for (i = 0; i < s.length; i++) {
        if (isPalindrome === true) {
            isPalindrome = s[i] === s[s.length - (i + 1)];
        } 
    }
    return isPalindrome;
};

let param = "A man, a plan, a canal: Panama";
console.log(isPalindrome(param), param);

param = "race a car";
console.log(isPalindrome(param), param);
