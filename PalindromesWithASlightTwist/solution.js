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
        const isPalindrome = (arr) => {
                return arr.toString() === arr.reverse().toString()
                }
        const answer = ['neither', [isPalindrome(vowelsInStr) ? 'vowels' : 'consonant'], 'both']
            const result = answer[isPalindrome(vowelsInStr) + isPalindrome(consonantInStr)]
            return Array.isArray(result) ? result[0] : result
        }

let str = "wizard"
ic(palindrome(str))
