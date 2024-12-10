const ic = require('node-icecream')()
let n = 493193

function digitalRoot(n) {
    const sum = (n) =>
        Array.from(String(n)).reduce((sum, item) => sum + Number(item), 0)
    n = sum(n)
    return n < 10 ? n : digitalRoot(n)
}

ic(digitalRoot(n))
