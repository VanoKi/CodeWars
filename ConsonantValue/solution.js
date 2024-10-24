const ic = require('node-icecream')()

const vovels = "aeiou"
const abc = []
for (let i = 96; i < 123; i++) {
    abc.push(String.fromCharCode(i))
}
ic(abc)
