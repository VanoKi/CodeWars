const ic = require('node-icecream')()

function formatWords(words) {
    let commas = words
        .filter(item => item && item.trim() !== '')
    ic(commas)
    let commasLenght = commas.length
    ic(commasLenght)
    const cases = {
        0: '',
        1: commas[0],
        2: commas.join(' and '),
        default:
            commas.length > 1 ? commas.slice(0, -1).join(', ') + ' and ' + commas.at(-1) : ''
    }
    return cases[commasLenght] || cases.default
}
let string = null
ic(formatWords(string))