const ic = require('node-icecream')()

function getMichaelLastName(str) {
    let array = str.split(' ')
    const ans = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 'Michael') {
            let word = array[i + 1]
            if (word && word[0] === word[0].toUpperCase()) {
                ans.push(word.replace(/[.,!?;:]+$/, ''))
            }
        }
    }
    return ans
}

const str = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";


ic(getMichaelLastName(str))

