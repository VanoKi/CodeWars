const ic = require('node-icecream')()

function sequence(n, pattern) {
    let arr = Array.from({length: n})
    if (typeof pattern === 'function') {
        return arr.map((i, idx) => pattern(i, idx))
    } else {
        return arr.fill(pattern)
    }
}

ic(sequence(3, "s"))