const ic = require('node-icecream')()

const glass = [['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]
// const glass = [['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]


function separateLiquids(glass) {
    const density = {
        'H': 1.36,
        'W': 1.00,
        'A': 0.87,
        'O': 0.80
    }
    const flatAndSorted = glass.flat().sort((a, b) => density[a] - density[b]);
    const result = []
    const widthOftheGlass = glass[0].length
    for (let i = 0; i < flatAndSorted.length; i+=widthOftheGlass) {
        result.push(flatAndSorted.slice(i, i + widthOftheGlass))
    }
    return result
}

ic(separateLiquids(glass))