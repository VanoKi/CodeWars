const ic = require('node-icecream')()

function largestValue(number){
    const a = Array.from(number.toString()).reverse().join('');
    const b = a.slice(0, a.length -2).concat(a[a.length -1]).concat(a[a.length - 2])
    return [+a, +a < +b ? +b : +a]
}

ic(largestValue(95659512354))