const ic = require('node-icecream')()

function countRepeats(str) {
    let count = 0
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === str[i]) {
            count++
        }
    }
    return count
}

ic(countRepeats('ab cca'))