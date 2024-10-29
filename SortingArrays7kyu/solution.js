const ic = require('node-icecream')()

const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

const ans = []
const d = {}
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
        if(a1[i][0] == a2[j][0]) {
            ans[i] = a2[j]
        }
    }
}

ic(ans)