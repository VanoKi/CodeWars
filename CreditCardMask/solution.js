const ic = require('node-icecream')()

function maskify(cc) {
    return cc.length > 4 ? cc.slice(-4) : cc
}

ic(maskify('616'))