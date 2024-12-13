const ic = require('node-icecream')()

function reverseVowels(str) {
    const vowels = 'AEIOUaeiou'
    const vowelsInStr = []
    const result = []
    str = Array.from(str)
    for (const strElement of str) {
        if (vowels.includes(strElement)) {
            // ic(strElement)
            vowelsInStr.push(strElement)
        }
    }
    for (const strElement of str) {
        if (vowels.includes(strElement)) {
            result.push(vowelsInStr.pop())
        } else {
            result.push(strElement)
        }
    }
    return result.join('')
}

ic(reverseVowels("Reverse Vowels In A String"))
