const ic = require('node-icecream')()

function maskify(cc) {
    return cc.length > 4 ? '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4) : cc
}

ic(maskify('4556364607935616'))