const ic = require('node-icecream')()

// const glass = [['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]

const density = {
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80
}

function separateLiquids(glass) {

    return glass.flat().sort((a, b) => a.localeCompare(b));
}

ic(separateLiquids(glass))