const ic = require('node-icecream')()

function formatWords(words) {
    let commas = words
        .filter(item => item && item.trim() !== '')
    let commasLenght = commas.length
    const cases = {
        0: '',
        1: commas[0],
        2: commas.join(' and '),
        default:
            commas.slice(0, -1).join(', ') + ' and ' + commas[commas.length - 1]
    }
    return cases[commasLenght] || cases.default
}
let string = ['one', 'two', 'three']
ic(formatWords(string))