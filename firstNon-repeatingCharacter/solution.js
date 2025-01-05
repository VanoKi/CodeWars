const ic = require('node-icecream')()

let str = 'sTreSS'
let dic = {}
let lowStr = str.toLowerCase()
for (let i = 0; i < lowStr.length; i++) {
    if (lowStr[i] in dic) dic[lowStr[i]] ++
    else dic[lowStr[i]] = 1
}
for (let i = 0; i < str.length; i++) {
    if (dic[str[i].toLowerCase()] === 1) ic(str[i])
}
// ic(dic)