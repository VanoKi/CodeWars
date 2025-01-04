const ic = require('node-icecream')()

function firstDup (str) {
    let dic = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in dic) {
            dic[str[i]] += 1
        } else {
            dic[str[i]] = 1
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (dic[str[i]] > 1){
            return str[i]
        }
    }
}

ic(firstDup('bar'))