const ic = require('node-icecream')()

function count(string) {
    let d = {}
    for (let i = 0; i < string.length; i++) {
        if(string[i] in d) {
            d[string[i]] += 1
        }else{
            d[string[i]] = 1
        }
    }
    return d;
}

ic(count('aba'))