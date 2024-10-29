const ic = require('node-icecream')()

const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

const ans = []
const d = {}
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
        ic(a1[i], a2[j])
    }
}