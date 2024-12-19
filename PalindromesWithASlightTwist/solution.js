const ic = require('node-icecream')()

function palindrome(str) {
    const vowels = 'AEIOU'
    const vowelsInStr = []
    const consonantInStr = []
    for (const strElement of str) {
        if (vowels.includes(strElement.toUpperCase())) {
            vowelsInStr.push(strElement)
        } else {
            consonantInStr.push(strElement)
        }
    }
    return consonantInStr
}

let str = "raCe car"

ic(palindrome(str))