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
            if (strElement.codePointAt(0) > 64 && strElement.codePointAt(0) < 91) {
                consonantInStr.push(strElement)
            }
        }
    }
    const isPalindrome = (arr) => arr === arr.reverse()
    if(isPalindrome(vowelsInStr) + isPalindrome(consonantInStr) == 2) {
        return "both"
    } else if(isPalindrome(vowelsInStr) + isPalindrome(consonantInStr) == 1) {
            return isPalindrome(vowelsInStr) ? "vowel" : "consonant"
        } else {
        return "neither"
        }
    }



let str = "pea13ce"
ic(palindrome(str))
