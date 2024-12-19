const ic = require('node-icecream')()

function palindrome(str) {
    const vowels = 'AEIOU'
    const vowelsInStr = []
    const consonantInStr = []
    for (let strElement of str) {
        strElement = strElement.toUpperCase()
        if (vowels.includes(strElement)) {
            vowelsInStr.push(strElement)
        } else {
            consonantInStr.push(strElement)
        }
    }
    function checkPalindrome(arr) {
        return arr === arr.reverse()
    }
    let result = [checkPalindrome(vowelsInStr), checkPalindrome(consonantInStr)]
    return result
}

let str = "raCe car"

ic(palindrome(str))