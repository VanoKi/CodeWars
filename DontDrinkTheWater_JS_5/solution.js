const ic = require('node-icecream')()

const glass = [['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]

function separateLiquids(glass) {

    return glass.flat();
}

ic(separateLiquids(glass))