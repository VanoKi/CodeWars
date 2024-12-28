const ic = require('node-icecream')()

function sortGiftCode(code){
    return Array.from(code).sort().join('')
}

ic(sortGiftCode('pqksuvy'))