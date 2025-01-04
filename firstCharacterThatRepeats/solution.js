const ic = require('node-icecream')()

let str = 'tweet'
let dic = {}
for (let i = 0; i < str.length; i++) {
    if (str[i] in dic) {
        dic[str[i]] += 1
    } else {
        dic[str[i]] = 1
    }
}

ic(dic)